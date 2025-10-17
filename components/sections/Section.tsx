import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { HackathonCard } from "@/components/HackathonCard"; // You can reuse this for both events/hackathons

interface Event {
  title: string;
  status: string;
  date: string;
  description: string;
  imageUrl: string;
}

interface SectionProps {
  /** Section heading, e.g. "Hackathons" or "Events" */
  title: string;
  /** Section subtitle */
  subtitle?: string;
  /** List of events to display */
  events: Event[];
  /** Optional link for “View All” card */
  viewAllLink?: string;
  /** Optional label for the “View All” card */
  viewAllLabel?: string;
  limit?: number;
}

export function Section({
  title,
  subtitle,
  events,
  viewAllLink,
  viewAllLabel = "View All",
  limit = 2,
}: SectionProps) {
  const visibleEvents = events.slice(0, limit);
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {visibleEvents.map((event, index) => (
          <HackathonCard key={index} {...event} />
        ))}

        {/* Optional "View All" Card */}
        {viewAllLink && (
          <Link href={viewAllLink} className="w-[350px]">
            <Card className="flex flex-col items-center justify-center h-full text-center border-dashed border-2 hover:border-primary transition-colors py-16">
              <h3 className="text-xl font-semibold mb-2">{viewAllLabel}</h3>
              <ArrowRight className="w-6 h-6 text-primary" />
            </Card>
          </Link>
        )}
      </div>
    </section>
  );
}
