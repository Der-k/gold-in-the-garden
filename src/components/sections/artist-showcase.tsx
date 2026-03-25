import Image from 'next/image';
import Link from 'next/link';
import { Ticket, ArrowUpRight } from 'lucide-react'; 
import { PlaceHolderImages } from '@/lib/placeholder-images';

const artists = [
  {
    name: 'Mordecai Dex',
    role: 'Singer-songwriter',
    imageId: 'artist1',
    category: 'HEADLINER',
    date: 'AUG 15 / 2026',
    bgColor: 'bg-zinc-900', 
    textColor: 'text-white',
    href: '#',
  },
  {
    name: 'Kahuti',
    role: 'Singer-songwriter',
    imageId: 'artist4',
    category: 'PERFORMANCE',
    date: 'AUG 15 / 2026',
    bgColor: 'bg-accent', 
    textColor: 'text-white',
    href: '#',
  },
  {
    name: 'Gashohey',
    role: 'Singer-songwriter',
    imageId: 'artist3',
    category: 'LIVE SOUL',
    date: 'AUG 16 / 2026',
    bgColor: 'bg-secondary', 
    textColor: 'text-white',
    href: '#',
  },
];

const ViewAllGuestsCard = () => (
  <Link
    href="/artists"
    className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden bg-primary p-8 transition-all duration-500 hover:brightness-110"
  >
    <div className="flex justify-between items-start">
      <span className="font-black text-black/40 text-[10px] tracking-[0.3em] font-sans">DISCOVER MORE</span>
      <ArrowUpRight className="w-6 h-6 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </div>
    
    <div className="relative z-10">
      <h3 className="text-5xl font-black text-black leading-[0.85] tracking-tighter italic font-headline lowercase">
        View all<br />guests
      </h3>
    </div>
    
    <div className="pt-4 border-t border-black/20">
      <p className="text-[10px] font-bold text-black/60 uppercase tracking-[0.2em] font-sans">Full 2026 Lineup</p>
    </div>
  </Link>
);

export function ArtistShowcase() {
  return (
    <section id="artists" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-zinc-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase mb-4 block font-sans">
              The Lineup
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-zinc-900 leading-[0.8] tracking-tighter font-headline lowercase">
              Meet the <br />
              <span className="text-gilded italic">artists.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-bold text-zinc-400 leading-relaxed uppercase tracking-tight font-sans">
            A curated selection of musical mastery, hosted in nature's most beautiful setting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {artists.map((artist) => {
            const artistImage = PlaceHolderImages.find((img) => img.id === artist.imageId);
            return (
              <Link
                href={artist.href}
                key={artist.name}
                className={`${artist.bgColor} group relative flex aspect-[3/4] flex-col justify-between p-8 transition-all duration-500 hover:scale-[1.02] z-10`}
              >
                {/* Top Metadata */}
                <div className="space-y-1">
                  <span className="block text-[10px] font-black tracking-[0.2em] opacity-60 uppercase font-sans">
                    {artist.category}
                  </span>
                  <h3 className={`text-4xl font-black leading-[0.9] tracking-tighter font-headline lowercase ${artist.textColor}`}>
                    {artist.name}
                  </h3>
                </div>

                {/* Inset Image */}
                <div className="relative w-full aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <Image
                    src={artistImage?.imageUrl ?? 'https://picsum.photos/300/400'}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Metadata */}
                <div className="pt-4 border-t border-white/20 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] font-bold opacity-70 uppercase tracking-[0.2em] font-sans">
                      {artist.role}
                    </p>
                    <p className="text-[10px] font-black text-primary uppercase mt-1 font-sans">
                      {artist.date}
                    </p>
                  </div>
                  <div className="bg-white/10 p-2 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
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