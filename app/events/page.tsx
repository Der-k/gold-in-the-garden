
'use client';

import { events } from '@/lib/events-data';
import { EventList } from '@/components/event-list';
import { Hero } from '@/components/hero';
import { EventSearchBar } from '@/components/event-search-bar';

export default function EventsPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight font-headline">
                AI Powered Search
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Use AI to search for events, get details and recommendations.
              </p>
              <div className="mt-4">
                <EventSearchBar />
              </div>
            </div>
          </aside>
          <div className="lg:col-span-3">
            <div className='mb-8'>
              <EventList isFilterOnly={true} allEvents={events} />
            </div>
            <EventList allEvents={events} />
          </div>
        </div>
      </div>
    </>
  );
}
