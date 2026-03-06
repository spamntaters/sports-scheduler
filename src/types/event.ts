export type Event = {
  id: string;
  name: string;
  type: string;
  time: string; // ISO 8601 format with timezone
  description: string;
  venues: string[];
};

/**
 * Convert a datetime-local input value to UTC ISO string
 * @param localDateTime - Local datetime string (e.g., "2026-03-08T19:00")
 * @returns UTC ISO string (e.g., "2026-03-09T00:00:00.000Z")
 */
export function localToUTC(localDateTime: string): string {
  if (!localDateTime) return "";
  const date = new Date(localDateTime);
  return date.toISOString();
}

/**
 * Convert a UTC ISO string to local datetime-local input format
 * @param utcString - UTC ISO string (e.g., "2026-03-09T00:00:00.000Z")
 * @returns Local datetime string for input (e.g., "2026-03-08T19:00")
 */
export function utcToLocal(utcString: string): string {
  if (!utcString) return "";
  const date = new Date(utcString);
  // Format as YYYY-MM-DDTHH:mm for datetime-local input
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Format event time for display in user's local timezone
 * @param timeString - ISO time string (UTC or with timezone)
 * @returns Formatted date/time string in user's local timezone
 */
export function formatEventTime(timeString: string): string {
  if (!timeString) return "";
  const date = new Date(timeString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}
