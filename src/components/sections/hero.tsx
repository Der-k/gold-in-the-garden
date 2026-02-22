"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const portfolioItems = [
  {
    title: 'Sauti Sol',
    description: 'Afro-pop Band',
    imageId: 'artist1',
  },
  {
    title: 'Nyashinski',
    description: 'Hip-hop Artist',
    imageId: 'artist2',
  },
  {
    title: 'Bensoul',
    description: 'Singer-songwriter',
    imageId: 'artist3',
  },
  {
    title: 'Fena Gitu',
    description: 'Urban Soul Artist',
    imageId: 'guest2',
  },
  {
    title: 'Nviiri The Storyteller',
    description: 'Singer-songwriter',
    imageId: 'guest1',
  },
  {
    title: 'Khaligraph Jones',
    description: 'Rapper',
    imageId: 'guest3',
  },
];


export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full">
      <div
        className="absolute inset-0 -z-10 h-full w-full"
      >
        <Image
          src={heroImage?.imageUrl ?? "https://picsum.photos/1920/1080"}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage?.imageHint}
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] w-full items-center justify-center text-center text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-12 md:gap-12 md:py-16">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
                Gold in the Garden
                </h1>
                <p className="font-body mt-6 max-w-2xl text-base text-primary-foreground/90 drop-shadow-md sm:text-lg md:text-xl">
                Experience the golden era of Kenyan music under the stars. An
                unforgettable night of live performances, art, and culture.
                </p>
            </div>

            <div className="w-full max-w-sm rounded-lg bg-background/20 p-4 text-foreground backdrop-blur-sm md:max-w-4xl lg:max-w-6xl">
                <div className="container mx-auto">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-border/50" />
                        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-white/80">
                            Performing Artists
                        </h2>
                        <div className="h-px w-8 bg-border/50" />
                    </div>

                    {/* Desktop and Mobile Carousel */}
                    <Carousel
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1">
                            {portfolioItems.map((item) => {
                                const itemImage = PlaceHolderImages.find((img) => img.id === item.imageId);
                                return (
                                    <CarouselItem key={item.title} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1">
                                        <div className="text-center group relative">
                                            <Image
                                                src={itemImage?.imageUrl ?? 'https://picsum.photos/200/200'}
                                                alt={item.title}
                                                width={250}
                                                height={250}
                                                className="w-full h-auto rounded-lg object-cover mx-auto aspect-square"
                                                data-ai-hint={itemImage?.imageHint}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 rounded-b-lg">
                                              <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
                                              <p className="text-xs text-white/80 truncate">{item.description}</p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <Button asChild size="lg">
              <Link href="#tickets">Get Your Tickets</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
