import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { CalendarIcon, MapPinIcon, UserIcon, Ticket, Clock, Info } from 'lucide-react';
import { events, categoryIcons } from '@/lib/events-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { BackButton } from '@/components/back-button';

export function generateStaticParams() {
  return events.map(event => ({ id: event.id }));
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find(e => e.id === id);
  if (!event) notFound();

  const CategoryIcon = categoryIcons[event.category];
  const galleryImages = PlaceHolderImages.slice(0, 3);
  const heroGridImages = PlaceHolderImages.slice(0, 8);

  return (
    <div className="bg-background text-foreground">
      <BackButton />

      <div className="w-full bg-black">
        <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 max-h-[80vh]">
            {heroGridImages.map((img, index) => (
              <div key={index} className="relative rounded-lg col-span-1 row-span-1">
                <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="gap-1.5 pl-1.5 py-1 mb-4 text-sm">
            <CategoryIcon className="h-3.5 w-3.5" />
            {event.category}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Event</h2>
          <p className="text-lg text-muted-foreground">{event.longDescription}</p>
        </div>

        <Separator className="my-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center">
            <CalendarIcon className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Date</h3>
            <p className="text-muted-foreground">{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Time</h3>
            <p className="text-muted-foreground">{format(new Date(event.date), 'h:mm a')}</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPinIcon className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-muted-foreground">{event.location}</p>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map(img => (
            <Card key={img.id} className="overflow-hidden group">
              <div className="relative aspect-square w-full">
                <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}