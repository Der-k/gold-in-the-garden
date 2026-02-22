'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const allImages = PlaceHolderImages;

const galleriesData: { [key: string]: { title: string; date: string; imageIds: string[] } } = {
  'gold-in-the-garden': {
    title: 'Gold in the Garden',
    date: 'March 29th, 2025',
    imageIds: ['hero', 'artist1', 'gallery1', 'artist2', 'gallery2', 'artist3', 'gallery3', 'guest1', 'gallery4'],
  },
  'summer-fest': {
    title: 'Summer Fest',
    date: 'August 15th, 2024',
    imageIds: ['gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6', 'hero', 'artist1', 'artist2'],
  },
  'rooftop-rhythms': {
    title: 'Rooftop Rhythms',
    date: 'June 1st, 2024',
    imageIds: ['gallery2', 'gallery4', 'guest3', 'artist1', 'gallery1', 'hero', 'artist2', 'gallery5', 'artist3'],
  },
  'night-lights': {
    title: 'Night Lights',
    date: 'December 31st, 2024',
    imageIds: ['gallery4', 'gallery6', 'artist2', 'guest1', 'gallery3', 'artist3', 'hero', 'gallery1', 'gallery5'],
  },
};

const imageLayoutClasses = [
    'col-span-2 row-span-2',
    '',
    '',
    'col-span-2',
    '',
    'row-span-2',
    '',
    '',
    'col-span-2',
];

export default function EventGalleryPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);
  const gallery = galleriesData[params.slug];

  if (!gallery) {
    notFound();
  }

  const images = gallery.imageIds
    .map((id) => allImages.find((img) => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {gallery.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{gallery.date}</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/gallery">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Galleries
              </Link>
            </Button>
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
             {images.map((image, index) => (
                <div 
                    key={image.id + index} 
                    className={`relative group overflow-hidden rounded-lg shadow-lg cursor-pointer ${imageLayoutClasses[index % imageLayoutClasses.length] || ''}`}
                    onClick={() => setSelectedImage(image)}
                >
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
            <DialogContent className="max-w-none w-auto h-auto bg-transparent border-none shadow-none">
              {selectedImage && (
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  width={1920}
                  height={1080}
                  className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                />
              )}
            </DialogContent>
          </Dialog>

        </div>
      </section>
    </div>
  );
}
