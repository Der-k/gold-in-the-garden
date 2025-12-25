"use client";

import { useMemo } from 'react';
import type { TSEvent } from '@/lib/events-data';
import { EventFilters } from './event-filters';
import { EventCard } from './event-card';
import { useSearchParams } from 'next/navigation';

type EventListProps = {
    allEvents: TSEvent[];
    isFilterOnly?: boolean;
};

export function EventList({ allEvents, isFilterOnly = false }: EventListProps) {
    const searchParams = useSearchParams();

    const categoryFilter = searchParams.get('category') || 'All';
    const dateFilterParam = searchParams.get('date');
    const dateFilter = dateFilterParam ? new Date(dateFilterParam) : undefined;

    const filteredEvents = useMemo(() => {
        const upcomingEvents = allEvents.filter(event => new Date(event.date) >= new Date());
        
        return upcomingEvents.filter(event => {
            const categoryMatch = categoryFilter === 'All' || event.category === categoryFilter;
            const dateMatch = !dateFilter || new Date(event.date).toDateString() === dateFilter.toDateString();
            return categoryMatch && dateMatch;
        }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [allEvents, categoryFilter, dateFilter]);

    if (isFilterOnly) {
        return (
             <EventFilters />
        )
    }

    return (
        <div>
            {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold">No Events Found</h2>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters or checking back later.</p>
                </div>
            )}
        </div>
    );
}
