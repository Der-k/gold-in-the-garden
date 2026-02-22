
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const galleryEvents = [
  {
    title: 'Gold in the Garden',
    date: 'March 29th, 2025',
    imageId: 'hero',
  },
  {
    title: 'Summer Fest',
    date: 'August 15th, 2024',
    imageId: 'gallery1',
  },
  {
    title: 'Rooftop Rhythms',
    date: 'June 1st, 2024',
    imageId: 'gallery2',
  },
  {
    title: 'Night Lights',
    date: 'December 31st, 2024',
    imageId: 'gallery4',
  }
];


export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Event Galleries
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Relive the moments from our past events. Click on an event to see the gallery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryEvents.map((event) => {
              const eventImage = PlaceHolderImages.find(
                (img) => img.id === event.imageId
              );
              const slug = event.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
                <Link
                  href={`/gallery/${slug}`}
                  key={event.title}
                  className="group relative block aspect-video w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <Image
                    src={eventImage?.imageUrl ?? 'https://picsum.photos/1280/720'}
                    alt={`Image for ${event.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={eventImage?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white drop-shadow-lg">
                    <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-base md:text-lg">{event.date}</p>
                    <Button variant="outline" className="mt-6 rounded-full border-2 border-white bg-transparent px-8 text-white transition-all group-hover:bg-white group-hover:text-black">
                      Open
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
