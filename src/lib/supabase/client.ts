import { createBrowserClient } from "@supabase/ssr";
import type { Event } from "@/types/event";

// Mock data for when Supabase is not configured
export const mockEvents: Event[] = [
  {
    id: "1",
    name: "Sunday Tennis Practice",
    type: "Tennis",
    time: "2026-03-08T19:00",
    description: "Join us for a fun evening of tennis practice!",
    venues: ["Reedy Creek Park Court #1"],
  },
  {
    id: "2",
    name: "Basketball Tournament",
    type: "Basketball",
    time: "2026-03-10T18:00",
    description: "3v3 basketball tournament for all skill levels",
    venues: ["Community Center Court"],
  },
];

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}

// Client-side Supabase client for Client Components
// Uses publishable key and stores session in cookies
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
