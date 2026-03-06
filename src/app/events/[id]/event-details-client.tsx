"use client";

import {
  AlignLeft,
  ArrowLeft,
  Calendar,
  Edit,
  MapPin,
  Trash2,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteEvent, getEventById, updateEvent } from "@/app/actions/events";
import { DeleteEventDialog } from "@/components/delete-event-dialog";
import { EventFormSheet } from "@/components/event-form-sheet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import type { Event } from "@/types/event";
import { formatEventTime } from "@/types/event";

interface EventDetailsClientProps {
  id: string;
}

export function EventDetailsClient({ id }: EventDetailsClientProps) {
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const eventData = await getEventById(id);
        if (!eventData) {
          router.push("/dashboard");
          return;
        }
        setEvent(eventData);
      } catch (error) {
        toast.error("Failed to load event", {
          description:
            error instanceof Error ? error.message : "Please try again",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadEvent();
  }, [id, router]);

  const refreshEvent = useCallback(async () => {
    try {
      const eventData = await getEventById(id);
      if (eventData) {
        setEvent(eventData);
      }
    } catch (error) {
      console.error("Failed to refresh event:", error);
    }
  }, [id]);

  const handleEditEvent = async (updatedEvent: Event) => {
    try {
      await updateEvent(id, updatedEvent);
      toast.success("Event updated successfully!");
      await refreshEvent();
    } catch (error) {
      toast.error("Failed to update event", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
      throw error;
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id);
      toast.success("Event deleted successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to delete event", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardAction className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <EventFormSheet
              mode="edit"
              event={event}
              onSubmit={handleEditEvent}
            >
              <Button variant="outline" size="sm">
                <Edit className="size-4 mr-1" />
                Edit
              </Button>
            </EventFormSheet>
            <DeleteEventDialog
              eventName={event.name}
              onDelete={handleDeleteEvent}
            >
              <Button variant="destructive" size="sm">
                <Trash2 className="size-4 mr-1" />
                Delete
              </Button>
            </DeleteEventDialog>
          </CardAction>
          <CardTitle className="text-xl sm:text-2xl">{event.name}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Calendar className="size-4" />
            {formatEventTime(event.time)}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ItemGroup className="gap-2">
            <Item>
              <ItemMedia variant="icon">
                <Trophy className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Sport</ItemTitle>
                <ItemDescription>{event.type}</ItemDescription>
              </ItemContent>
            </Item>

            <ItemSeparator />

            <Item>
              <ItemMedia variant="icon">
                <MapPin className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Venues</ItemTitle>
                <ItemDescription>{event.venues.join(" • ")}</ItemDescription>
              </ItemContent>
            </Item>

            <ItemSeparator />

            <Item>
              <ItemMedia variant="icon">
                <AlignLeft className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Description</ItemTitle>
                <ItemDescription>{event.description}</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 border-t">
          <Button variant="outline" className="w-full sm:w-auto">
            Share Event
          </Button>
          <Button className="w-full sm:w-auto">Join Event</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
