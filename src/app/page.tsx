import { ArtistShowcase } from '@/components/sections/artist-showcase';
import { EventDescription } from '@/components/sections/event-description';
import { Hero } from '@/components/sections/hero';
import { TicketCategories } from '@/components/sections/ticket-categories';

export default function Home() {
  return (
    <>
      <Hero />
      <EventDescription />
      <ArtistShowcase />
      <TicketCategories />
    </>
  );
}
