import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const artists = [
  {
    name: 'Sauti Sol',
    role: 'Afro-pop Band',
    imageId: 'artist1',
    href: '#',
  },
  {
    name: 'Nyashinski',
    role: 'Hip-hop Artist',
    imageId: 'artist2',
    href: '#',
  },
  {
    name: 'Bensoul',
    role: 'Singer-songwriter',
    imageId: 'artist3',
    href: '#',
  },
];

const ViewAllGuestsCard = () => (
  <Link
    href="#"
    className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-green-500 text-primary-foreground shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
  >
    <div className="relative flex h-full w-full items-center justify-center text-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute h-4/5 w-4/5 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <path
          stroke="black"
          strokeWidth="3.5"
          fill="currentColor"
          d="M86.8,28.4L73.1,31.3L67,16.8l-10.9,11L41.6,21l-4.5,14.8L22,31.7l8.4,12.2L20.1,54.2l15.3,0.3l3.3,15.1l9.6-11.8l10.9,11.1l-1.3-15.5l14.2-3.8l-10.4-9.8L86.8,28.4z"
        />
      </svg>
      <div className="relative z-10 font-bold text-black">
        <span className="block text-lg">View All</span>
        <span className="block text-lg">Guests</span>
      </div>
    </div>
    <span className="sr-only">View all guests</span>
  </Link>
);

export function ArtistShowcase() {
  return (
    <section id="artists" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Meet The Artists
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get ready for an incredible lineup of Kenya's finest musical talents.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => {
            const artistImage = PlaceHolderImages.find(
              (img) => img.id === artist.imageId
            );
            return (
              <Link
                href={artist.href}
                key={artist.name}
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Image
                  src={artistImage?.imageUrl ?? 'https://picsum.photos/300/400'}
                  alt={`Photo of ${artist.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={artistImage?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                  <h3 className="text-xl font-semibold drop-shadow-md">
                    {artist.name}
                  </h3>
                  <p className="text-sm opacity-90 drop-shadow">
                    {artist.role}
                  </p>
                </div>
              </Link>
            );
          })}
          <ViewAllGuestsCard />
        </div>
      </div>
    </section>
  );
}