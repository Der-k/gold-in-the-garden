
'use client';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { format } from 'date-fns';
import {
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  Ticket,
  Clock,
  Info,
  ArrowLeft,
} from 'lucide-react';
import { events, categoryIcons } from '@/lib/events-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type EventPageProps = {
  params: {
    id: string;
  };
};

export default function EventPage({ params }: EventPageProps) {
  const router = useRouter();
  const event = events.find(e => e.id === params.id);

  if (!event) {
    // If the event is not found, we redirect to a generic events page
    // as there is no 404 page in this project.
    redirect('/');
  }

  const imageData = PlaceHolderImages.find(img => img.id === event.image);
  const CategoryIcon = categoryIcons[event.category];
  const galleryImages = PlaceHolderImages.slice(0, 3);
  
  const heroGridImages = PlaceHolderImages.slice(0, 8);


  return (
    <div className="bg-background text-foreground">
      {/* Back button */}
      <div className="absolute top-24 left-4 z-50">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="bg-white/80 hover:bg-white text-black rounded-full shadow-lg">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Masonry Hero Section */}
      <div className="w-full bg-black">
        <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 max-h-[80vh]">
            {/* Row 1 */}
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[0].imageUrl} alt="Event image 1" fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-2 row-span-1 relative">
                <Image src={heroGridImages[1].imageUrl} alt="Event image 2" fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[2].imageUrl} alt="Event image 3" fill objectFit="cover" className="rounded-lg" />
            </div>

            {/* Row 2 */}
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[3].imageUrl} alt="Event image 4" fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-2 row-span-1 flex items-center justify-center text-center">
                <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white" style={{fontFamily: "'Dancing Script', cursive"}}>
                    {event.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80">
                    experience music like never before
                </p>
                </div>
            </div>
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[4].imageUrl} alt="Event image 5" fill objectFit="cover" className="rounded-lg" />
            </div>
            
            {/* Row 3 */}
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[5].imageUrl} alt="Event image 6" fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-2 row-span-1 relative">
                <Image src={heroGridImages[6].imageUrl} alt="Event image 7" fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 relative">
                <Image src={heroGridImages[7].imageUrl} alt="Event image 8" fill objectFit="cover" className="rounded-lg" />
            </div>
            </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="gap-1.5 pl-1.5 py-1 mb-4 text-sm"
            >
              <CategoryIcon className="h-3.5 w-3.5" />
              {event.category}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              About The Event
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {event.longDescription}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Key Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">Date</h3>
              <p className="text-muted-foreground">
                {format(new Date(event.date), 'EEEE, MMMM d, yyyy')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">Time</h3>
              <p className="text-muted-foreground">
                {format(new Date(event.date), 'h:mm a')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted-foreground">{event.location}</p>
            </div>
            <div className="flex flex-col items-center">
              <UserIcon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">Organizer</h3>
              <p className="text-muted-foreground">{event.organizer}</p>
            </div>
            <div className="flex flex-col items-center">
              <Ticket className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">Tickets</h3>
              <p className="text-muted-foreground">Starting from $25</p>
            </div>
             <div className="flex flex-col items-center">
              <Info className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold text-lg">More Info</h3>
              <p className="text-muted-foreground">All ages welcome</p>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Gallery Section */}
          <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">
              Event Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages.map(img => (
                <Card key={img.id} className="overflow-hidden group">
                  <div className="relative aspect-square w-full">
                     <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
