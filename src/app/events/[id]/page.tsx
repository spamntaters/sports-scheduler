import { EventDetailsClient } from "./event-details-client";

interface EventDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return [{ id: "placeholder" }];
}

export default async function EventDetails({ params }: EventDetailsPageProps) {
  const { id } = await params;
  return <EventDetailsClient id={id} />;
}
