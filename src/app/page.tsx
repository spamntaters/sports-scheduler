import { AlignLeft, Calendar, Eye, MapPin, Trophy } from "lucide-react";
import Link from "next/link";
import { getUpcomingEvents } from "@/app/actions/events";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg line-clamp-2 min-h-[3.5rem]">
          {event.name}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-xs">
          <Calendar className="size-3 pointer-events-none" />
          {formatEventTime(event.time)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 py-0">
        <ItemGroup>
          <Item size="sm">
            <ItemMedia variant="icon">
              <Trophy className="size-4 pointer-events-none" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-xs">Sport</ItemTitle>
              <ItemDescription className="text-sm truncate">
                {event.type}
              </ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item size="sm">
            <ItemMedia variant="icon">
              <MapPin className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-xs">Venues</ItemTitle>
              <ItemDescription className="text-sm line-clamp-2">
                {event.venues.join(" • ")}
              </ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item size="sm">
            <ItemMedia variant="icon">
              <AlignLeft className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-xs">Description</ItemTitle>
              <ItemDescription className="text-sm line-clamp-2">
                {event.description || "—"}
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </CardContent>
      <CardFooter className="pt-4">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link
            href={`/events/${event.id}`}
            className="flex items-center gap-2"
          >
            <Eye className="size-4" />
            View Event
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function Home() {
  const events: Event[] = await getUpcomingEvents();

  return (
    <section className="bg-muted pt-16 pb-12">
      <div className="mx-auto flex items-center h-full max-w-7xl flex-col gap-16">
        <div className="flex max-w-4xl flex-col items-center gap-4 self-center text-center">
          <h1 className="text-3xl leading-[1.29167] font-semibold text-balance">
            Welcome to Sports Scheduler
          </h1>
          <p className="text-muted-foreground text-xl">
            The internet's home for Sports Scheduling
          </p>
          <p className="text-muted-foreground">
            {events.length > 0
              ? `Showing ${events.length} upcoming event${events.length === 1 ? "" : "s"} in the next week`
              : "No events scheduled in the next week"}
          </p>
        </div>
        {events.length === 1 ? (
          <div className="w-full max-w-sm">
            <EventCard event={events[0]} />
          </div>
        ) : events.length > 1 ? (
          <Carousel
            opts={{
              align: "start",
              loop: events.length > 3,
            }}
            className="w-full max-w-[320px] sm:max-w-xl lg:max-w-7xl px-4"
          >
            <CarouselContent className="-ml-4">
              {events.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="pl-4 basis-full lg:basis-1/3"
                >
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No events scheduled in the next 7 days. Create one now!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
