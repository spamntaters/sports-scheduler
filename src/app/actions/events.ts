"use server";

import { redirect } from "next/navigation";
import { isSupabaseConfigured, mockEvents } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import type { Event } from "@/types/event";

// In-memory mock events for development
const devEvents: Event[] = [...mockEvents];

/**
 * Create a new event
 * @param event - The event data to create
 * @returns The created event with its ID
 */
export async function createEvent(event: Omit<Event, "id">): Promise<Event> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for createEvent");
    const newEvent: Event = {
      ...event,
      id: Math.random().toString(36).substring(2, 9),
    };
    devEvents.push(newEvent);
    return newEvent;
  }

  const supabase = await createClient();

  // Get the current user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("Unauthorized: You must be logged in to create an event");
  }

  // Insert the event into the database
  const { data, error } = await supabase
    .from("events")
    .insert({
      name: event.name,
      type: event.type,
      time: event.time,
      description: event.description,
      venues: event.venues,
      created_by: user.id,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating event:", error);
    throw new Error(`Failed to create event: ${error.message}`);
  }

  return data as Event;
}

/**
 * Get all events with optional filters
 * @param filters - Optional filters for name search and sport type
 * @returns Array of filtered events
 */
export async function getEvents(filters?: {
  name?: string;
  type?: string;
}): Promise<Event[]> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for getEvents");
    let filtered = [...devEvents];

    if (filters?.name) {
      const searchTerm = filters.name.toLowerCase();
      filtered = filtered.filter((e) =>
        e.name.toLowerCase().includes(searchTerm),
      );
    }

    if (filters?.type) {
      filtered = filtered.filter((e) => e.type === filters.type);
    }

    return filtered;
  }

  const supabase = await createClient();

  let query = supabase
    .from("events")
    .select("*")
    .order("time", { ascending: true });

  // Apply name filter (case-insensitive search)
  if (filters?.name) {
    query = query.ilike("name", `%${filters.name}%`);
  }

  // Apply sport type filter
  if (filters?.type) {
    query = query.eq("type", filters.type);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching events:", error);
    throw new Error(`Failed to fetch events: ${error.message}`);
  }

  return (data || []) as Event[];
}

/**
 * Get a single event by ID
 * @param id - The event ID
 * @returns The event or null if not found
 */
export async function getEventById(id: string): Promise<Event | null> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for getEventById");
    return devEvents.find((e) => e.id === id) || null;
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      return null;
    }
    console.error("Error fetching event:", error);
    throw new Error(`Failed to fetch event: ${error.message}`);
  }

  return data as Event;
}

/**
 * Update an existing event
 * @param id - The event ID
 * @param event - The updated event data
 * @returns The updated event
 */
export async function updateEvent(
  id: string,
  event: Partial<Omit<Event, "id">>,
): Promise<Event> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for updateEvent");
    const index = devEvents.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error("Event not found");
    }
    devEvents[index] = { ...devEvents[index], ...event };
    return devEvents[index];
  }

  const supabase = await createClient();

  // Get the current user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("Unauthorized: You must be logged in to update an event");
  }

  // Verify the user owns this event
  const { data: existingEvent, error: fetchError } = await supabase
    .from("events")
    .select("created_by")
    .eq("id", id)
    .single();

  if (fetchError) {
    throw new Error("Event not found");
  }

  // Check if user is the creator
  if ((existingEvent as any).created_by !== user.id) {
    throw new Error("Forbidden: You can only edit events you created");
  }

  // Update the event
  const { data, error } = await supabase
    .from("events")
    .update({
      name: event.name,
      type: event.type,
      time: event.time,
      description: event.description,
      venues: event.venues,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating event:", error);
    throw new Error(`Failed to update event: ${error.message}`);
  }

  return data as Event;
}

/**
 * Delete an event
 * @param id - The event ID to delete
 */
export async function deleteEvent(id: string): Promise<void> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for deleteEvent");
    const index = devEvents.findIndex((e) => e.id === id);
    if (index !== -1) {
      devEvents.splice(index, 1);
    }
    redirect("/dashboard");
    return;
  }

  const supabase = await createClient();

  // Get the current user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("Unauthorized: You must be logged in to delete an event");
  }

  // Verify the user owns this event
  const { data: existingEvent, error: fetchError } = await supabase
    .from("events")
    .select("created_by")
    .eq("id", id)
    .single();

  if (fetchError) {
    throw new Error("Event not found");
  }

  // Check if user is the creator
  if ((existingEvent as any).created_by !== user.id) {
    throw new Error("Forbidden: You can only delete events you created");
  }

  // Delete the event
  const { error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    console.error("Error deleting event:", error);
    throw new Error(`Failed to delete event: ${error.message}`);
  }

  redirect("/dashboard");
}

/**
 * Get events happening in the next week
 * @returns Array of upcoming events within the next 7 days
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  // Use mock data mode if Supabase is not configured
  if (!isSupabaseConfigured()) {
    console.log("📦 Using mock data mode for getUpcomingEvents");
    const now = new Date();
    const oneWeekFromNow = new Date(now);
    oneWeekFromNow.setDate(now.getDate() + 7);

    return devEvents.filter((event) => {
      const eventTime = new Date(event.time);
      return eventTime >= now && eventTime <= oneWeekFromNow;
    });
  }

  const supabase = await createClient();

  const now = new Date().toISOString();
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .gte("time", now)
    .lte("time", oneWeekFromNow.toISOString())
    .order("time", { ascending: true });

  if (error) {
    console.error("Error fetching upcoming events:", error);
    throw new Error(`Failed to fetch upcoming events: ${error.message}`);
  }

  return (data || []) as Event[];
}
