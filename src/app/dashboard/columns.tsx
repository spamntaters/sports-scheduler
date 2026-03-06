import type { ColumnDef } from "@tanstack/react-table";
import { type Event, formatEventTime } from "@/types/event";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
    cell: ({ row }) => {
      return (
        <span className="font-medium line-clamp-2 max-w-[200px]">
          {row.getValue("name")}
        </span>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Sport",
    cell: ({ row }) => {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {row.getValue("type")}
        </span>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      return (
        <span className="text-sm text-muted-foreground">
          {formatEventTime(row.getValue("time"))}
        </span>
      );
    },
  },
  {
    accessorKey: "venues",
    header: "Venues",
    cell: ({ row }) => {
      const venues: string[] = row.getValue("venues");
      return (
        <span className="line-clamp-2 max-w-[200px] text-sm">
          {venues.join(", ")}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description: string = row.getValue("description");
      return (
        <span className="line-clamp-2 max-w-[250px] text-sm text-muted-foreground">
          {description || "—"}
        </span>
      );
    },
  },
];
