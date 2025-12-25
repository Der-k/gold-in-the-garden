"use client";

import { CalendarIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { eventCategories } from '@/lib/events-data';
import { format } from 'date-fns';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function EventFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get('category') || 'All';
    const dateParam = searchParams.get('date');
    const date = dateParam ? new Date(dateParam) : undefined;

    const handleCategoryChange = (newCategory: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newCategory === 'All') {
            params.delete('category');
        } else {
            params.set('category', newCategory);
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    const handleDateChange = (newDate: Date | undefined) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newDate) {
            params.set('date', newDate.toISOString().split('T')[0]);
        } else {
            params.delete('date');
        }
        router.replace(`${pathname}?${params.toString()}`);
    };
    
    const clearFilters = () => {
        router.replace(pathname);
    }

    const showClearButton = category !== 'All' || date !== undefined;

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-card border shadow-sm items-center">
            <div className="w-full md:w-1/3">
                <Select value={category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter by category..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        {eventCategories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full md:w-1/3">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateChange}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            { showClearButton && (
                <div className="w-full md:w-auto">
                    <Button variant="ghost" className="w-full" onClick={clearFilters}>
                        <X className="mr-2 h-4 w-4" />
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
