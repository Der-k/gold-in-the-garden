import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import type { TSEvent } from '@/lib/events-data';
import { categoryIcons } from '@/lib/events-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type EventCardProps = {
  event: TSEvent;
};

export function EventCard({ event }: EventCardProps) {
  const imageData = PlaceHolderImages.find(img => img.id === event.image);
  const CategoryIcon = categoryIcons[event.category];

  return (
    <Link href={`/events/${event.id}`} className="block group">
        <Card className="flex flex-col md:flex-row h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="md:w-1/3 relative h-48 md:h-auto">
            {imageData && (
            <Image
                src={imageData.imageUrl}
                alt={imageData.description}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                data-ai-hint={imageData.imageHint}
            />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>
        <div className="flex flex-col p-4 md:w-2/3">
            <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="gap-1.5 pl-1.5 py-1 text-xs">
                    <CategoryIcon className="h-3.5 w-3.5" />
                    {event.category}
                </Badge>
            </div>
            <CardTitle className="text-xl font-headline mb-2 leading-tight group-hover:text-primary transition-colors">
                {event.title}
            </CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-2 flex-grow">{event.description}</p>
            <div className="mt-4 flex flex-col items-start gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{format(new Date(event.date), 'EEE, MMM d')}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{event.location}</span>
                </div>
            </div>
        </div>
        </Card>
    </Link>
  );
}
