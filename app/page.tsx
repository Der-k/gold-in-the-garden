'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clapperboard, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events } from '@/lib/events-data';

export default function OrganizerPage() {
  const ourWorkImages = PlaceHolderImages.filter(img =>
    ['placeholder-9', 'placeholder-10', 'placeholder-11', 'placeholder-12'].includes(img.id)
  );

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxldmVudCUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzE5NDI4Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team working at an event"
            fill
            className="object-cover"
            data-ai-hint="event management team"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight" style={{fontFamily: "'Dancing Script', cursive"}}>
            Gold in the Garden
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 font-light">
            Crafting Unforgettable Experiences
          </p>
           <div className="mt-8">
              <Link href="/events" passHref>
                <Button size="lg" className="mt-8">
                  Contact Us
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-sm">Who We Are</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            We are a creative agency dedicated to bringing events to life.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            At Gold in the Garden, we believe that every event is an opportunity to create a lasting memory. Our team of passionate planners, designers, and coordinators work tirelessly to turn your vision into a vibrant reality. From intimate gatherings to large-scale festivals, we handle every detail with precision and a touch of magic.
          </p>
           <Button variant="link" className="mt-6 text-lg">
            More About Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
             <Badge variant="outline" className="mb-4 text-sm">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What We Do
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              We offer a complete suite of event management services to ensure your event is a seamless success.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-200 rounded-lg bg-white">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Event Planning</h3>
              <p className="mt-2 text-gray-600">
                Full-cycle planning from concept to execution. We handle venues, vendors, and logistics.
              </p>
            </div>
             <div className="p-8 border border-gray-200 rounded-lg bg-white">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Clapperboard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Production & Design</h3>
              <p className="mt-2 text-gray-600">
                Creative design, staging, lighting, and audiovisuals to create an immersive atmosphere.
              </p>
            </div>
             <div className="p-8 border border-gray-200 rounded-lg bg-white">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Audience Engagement</h3>
              <p className="mt-2 text-gray-600">
                Engaging your audience through curated content, interactive experiences, and social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            A Glimpse of Our Magic
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We are proud of the moments we've helped create. Here is a selection of our recent work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {ourWorkImages.map((image, index) => (
            <div key={image.id} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg group">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {events[index % events.length].title}
                </h3>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
           <Link href="/events" passHref>
              <Button size="lg" variant="default">
                See All Events
              </Button>
           </Link>
         </div>
      </section>

      {/* Contact Section */}
       <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
             Let's create something beautiful.
           </h2>
           <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
             Have a project in mind? We'd love to hear about it. Get in touch with us to start the conversation.
           </p>
           <Button size="lg" className="mt-8 bg-primary text-primary-foreground">
             Contact Us
           </Button>
        </div>
       </section>

    </div>
  );
}