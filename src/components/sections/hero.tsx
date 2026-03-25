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
import { Instagram, Twitter, ArrowRight, Plus } from "lucide-react";

const portfolioItems = [
  { title: "Mordecai Dex", description: "Singer-songwriter", imageId: "artist1" },
  { title: "Faith Kimani", description: "Singer-songwriter", imageId: "artist2" },
  { title: "Gashohey", description: "Singer-songwriter", imageId: "artist3" },
  { title: "Kahuti", description: "Singer-songwriter", imageId: "artist4" },
  { title: "Billy Black", description: "Singer-songwriter", imageId: "artist5" },
];

function ArtistCarousel() {
  // each carousel gets its own autoplay instance
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <CarouselContent className="-ml-4">
        {portfolioItems.map((item) => {
          const itemImage = PlaceHolderImages.find((img) => img.id === item.imageId);

          return (
            <CarouselItem
              key={item.title}
              className="pl-4 basis-[80%] sm:basis-[60%] md:basis-[45%]"
            >
              <div className="group relative overflow-hidden rounded-[2rem] bg-zinc-950 aspect-[3.5/4.5] shadow-2xl transition-all duration-500 hover:scale-[1.03]">
                <Image
                  src={itemImage?.imageUrl ?? "https://picsum.photos/400/533"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight uppercase italic group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-screen flex items-stretch bg-transparent">
      <div
        className="absolute inset-0 -z-20 h-full w-full parallax-bg"
        style={{
          backgroundImage: `url(${heroImage?.imageUrl ?? "https://picsum.photos/1920/1080"})`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/50 lg:hidden" />
      <div className="absolute inset-0 -z-10 bg-black/20 hidden lg:block" />

      <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-[45%] bg-transparent lg:bg-white px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-between z-10 min-h-[100svh] lg:min-h-0">
          <div className="space-y-8 lg:space-y-12">
            <div className="flex items-center gap-4">
              <Image
                src="/images/gold.png"
                alt="Logo"
                width={160}
                height={40}
                className="object-contain"
              />
              <div className="h-4 w-px bg-white/20 lg:bg-zinc-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 lg:text-zinc-400">
                Live 2026
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-white lg:text-zinc-900 leading-[0.85] tracking-tighter uppercase">
                Golden <br />
                <span className="text-gilded">Era,</span> <br />
                Now.
              </h1>
              <p className="max-w-xs text-sm font-bold text-white/80 lg:text-zinc-400 uppercase tracking-tight leading-relaxed">
                Nature meets luxury. <br />
                Experience the fusion of soul and soil.
              </p>
            </div>

            <div className="block lg:hidden my-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  Featuring Artists
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <ArtistCarousel />
            </div>

            <Button asChild className="btn-gold h-14 px-8 text-sm rounded-none shadow-none w-full lg:w-max">
              <Link href="#tickets" className="flex items-center gap-4 justify-center">
                BOOK EXPERIENCE <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 lg:border-zinc-100 flex items-center justify-between">
            <div className="flex gap-6">
              <Link href="#" className="text-white/60 lg:text-zinc-400 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white/60 lg:text-zinc-400 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
            <span className="text-[9px] font-bold text-white/40 lg:text-zinc-300 tracking-widest uppercase">
              KICC Nairobi
            </span>
          </div>
        </div>

        <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center p-12 relative">
          <div className="w-full max-w-3xl bg-transparent border border-white/20 p-12 rounded-[3.5rem] relative">
            <div className="flex items-center justify-between mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                Headliners
              </span>
              <Plus className="w-4 h-4 text-white/40" />
            </div>

            <ArtistCarousel />

            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r-2 border-b-2 border-primary rounded-br-[3.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}