import Image from "next/image";
import { Section } from "@/components/sections/Section";
import { hackathonEvents,generalEvents } from "@/data/eventsData";
export default function Home() {
  return (
    <div className="">
      <Section
        title="Hackathons"
        subtitle="Join exciting hackathons, collaborate, and showcase your skills."
        events={hackathonEvents}
        viewAllLink="/hackathons"
        viewAllLabel="View Past Hackathons"
      />
      <Section
        title="Events"
        subtitle="Stay updated with tech meetups, workshops, and events."
        events={generalEvents}
        viewAllLink="/events"
        viewAllLabel="View All Events"
      />
    </div>
  );
}
