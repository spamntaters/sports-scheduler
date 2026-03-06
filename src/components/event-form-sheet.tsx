"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Event } from "@/types/event";
import { localToUTC, utcToLocal } from "@/types/event";

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Event name is required"),
  type: z.string().min(1, "Sport type is required"),
  time: z.string().min(1, "Date and time is required"),
  description: z.string(),
  venues: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface EventFormSheetProps {
  mode: "create" | "edit";
  event?: Event;
  children: React.ReactNode;
  onSubmit?: (event: Event) => void | Promise<void>;
}

export function EventFormSheet({
  mode,
  event,
  children,
  onSubmit,
}: EventFormSheetProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: event?.id || "",
      name: event?.name || "",
      type: event?.type || "",
      time: event?.time ? utcToLocal(event.time) : "",
      description: event?.description || "",
      venues: event?.venues?.join(", ") || "",
    },
  });

  // Reset form with latest event data when sheet opens
  useEffect(() => {
    if (open) {
      if (mode === "edit" && event) {
        form.reset({
          id: event.id,
          name: event.name,
          type: event.type,
          time: utcToLocal(event.time),
          description: event.description,
          venues: event.venues.join(", "),
        });
      } else if (mode === "create") {
        form.reset({
          id: "",
          name: "",
          type: "",
          time: "",
          description: "",
          venues: "",
        });
      }
    }
  }, [open, event, mode, form]);

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    // Convert local time to UTC for storage
    const eventData: Event = {
      id: values.id,
      name: values.name,
      type: values.type,
      time: localToUTC(values.time),
      description: values.description,
      venues: values.venues
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
    };

    try {
      await onSubmit?.(eventData);
      form.reset();
      setOpen(false);
    } catch (error) {
      // Error is handled by parent component
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col h-full"
          >
            <SheetHeader className="space-y-2">
              <SheetTitle>
                {mode === "create" ? "Create Event" : "Edit Event"}
              </SheetTitle>
              <SheetDescription>
                {mode === "create"
                  ? "Fill in the details below to create a new event."
                  : "Update the event details below."}
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 py-6 px-4 space-y-6 overflow-y-auto">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter event name"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sport Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Tennis, Basketball, Soccer"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date & Time</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Time will be stored in UTC and shown in your local
                      timezone
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="venues"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Venues</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter venues separated by commas"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Separate multiple venues with commas
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter event description"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SheetFooter className="border-t pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {mode === "create" ? "Creating..." : "Saving..."}
                  </>
                ) : (
                  <>{mode === "create" ? "Create Event" : "Save Changes"}</>
                )}
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
