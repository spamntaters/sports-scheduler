"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { createEvent, getEvents } from "@/app/actions/events";
import { DataTable } from "@/components/data-table";
import { EventFormSheet } from "@/components/event-form-sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Event } from "@/types/event";
import { columns } from "./columns";

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [allSports, setAllSports] = useState<string[]>([]);

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getEvents({
        name: searchName || undefined,
        type: selectedSport || undefined,
      });
      setEvents(data);

      // Extract unique sports from all events (not filtered) for the dropdown
      const allEvents = await getEvents();
      const sports = Array.from(new Set(allEvents.map((event) => event.type)));
      setAllSports(sports);
    } catch (error) {
      toast.error("Failed to load events", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  }, [searchName, selectedSport]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchName(inputValue);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleCreateEvent = async (newEvent: Event) => {
    try {
      await createEvent(newEvent);
      toast.success("Event created successfully!", {
        description: `${newEvent.name} has been created.`,
      });
      // Refresh the events list after creation
      await loadEvents();
    } catch (error) {
      toast.error("Failed to create event", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      });
      throw error;
    }
  };

  const handleSportChange = (value: string) => {
    setSelectedSport(value);
  };

  const clearFilters = () => {
    setSearchName("");
    setInputValue("");
    setSelectedSport("");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 p-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
          <Input
            placeholder="Event name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full sm:w-64"
          />
          <Select value={selectedSport} onValueChange={handleSportChange}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sport</SelectLabel>
                {allSports.map((sport) => (
                  <SelectItem value={sport} key={sport}>
                    {sport}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {(searchName || selectedSport) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="self-start sm:self-auto"
            >
              Clear filters
            </Button>
          )}
        </div>
        <EventFormSheet mode="create" onSubmit={handleCreateEvent}>
          <Button className="w-full sm:w-auto">Create Event</Button>
        </EventFormSheet>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={events} />
      )}
    </div>
  );
}
