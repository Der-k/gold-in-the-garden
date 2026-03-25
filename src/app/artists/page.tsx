import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Plus, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const gardenRegistry = [
  { name: 'Sauti Sol', season: '2026', status: 'HEADLINER', color: 'bg-zinc-900', text: 'text-white', imageId: 'artist1' },
  { name: 'Nyashinski', season: '2026', status: 'PRESENT', color: 'bg-accent', text: 'text-white', imageId: 'artist2' },
  { name: 'Xenia Manasseh', season: '2025', status: 'ALUMNI', color: 'bg-[#E5E5E5]', text: 'text-zinc-900', imageId: 'guest1' },
  { name: 'Bensoul', season: '2026', status: 'PRESENT', color: 'bg-secondary', text: 'text-white', imageId: 'artist3' },
  { name: 'Nviiri', season: '2024', status: 'ALUMNI', color: 'bg-primary', text: 'text-black', imageId: 'guest2' },
  { name: 'Karun', season: '2024', status: 'ALUMNI', color: 'bg-zinc-800', text: 'text-white', imageId: 'guest3' },
];

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* HEADER: Responsive Typography Scales */}
      <section className="pt-20 md:pt-24 pb-12 px-6 border-b border-zinc-200 uppercase">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-zinc-400 hover:text-primary transition-colors mb-12 md:mb-16">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 md:gap-8">
            <h1 className="text-6xl md:text-[10rem] lg:text-[12rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter italic font-headline lowercase">
                garden <br />registry.
            </h1>
            <p className="max-w-[280px] text-[10px] md:text-[11px] font-bold leading-relaxed text-zinc-400 tracking-widest uppercase">
              A comprehensive archive of the voices that have defined the golden era of the garden.
            </p>
          </div>
        </div>
      </section>

      {/* MODULAR GRID */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* FEATURED BLOCK */}
          <div className="md:col-span-2 min-h-[300px] md:aspect-auto bg-primary flex flex-col justify-between p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group">
             <div className="relative z-10">
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-black/40 mb-3 md:mb-4 block underline decoration-2 uppercase">Currently Curating</span>
                <h2 className="text-5xl md:text-9xl font-black text-black leading-none tracking-tighter italic font-headline lowercase">
                  2026 <br /> season
                </h2>
             </div>
             <div className="relative z-10 flex justify-between items-end mt-8 md:mt-0">
                <Button className="rounded-full bg-black text-white hover:bg-zinc-800 px-6 md:px-8 font-black text-[10px] md:text-xs h-10 md:h-12 uppercase">
                    View Live Dates
                </Button>
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-black/20" />
             </div>
             <div className="absolute -right-20 -top-20 w-64 h-64 md:w-96 md:h-96 border-[30px] md:border-[40px] border-black/5 rounded-full" />
          </div>

          {/* ARTIST CARDS */}
          {gardenRegistry.map((artist, idx) => {
            const artistImg = PlaceHolderImages.find(img => img.id === artist.imageId);
            return (
              <div 
                key={idx} 
                className={`${artist.color} ${artist.text} relative aspect-[4/5] p-6 md:p-8 flex flex-col justify-between overflow-hidden rounded-[2rem] md:rounded-[2.5rem] group transition-all duration-500 shadow-xl`}
              >
                <div className="flex justify-between items-start relative z-10 uppercase">
                  <div className="text-[8px] md:text-[9px] font-black tracking-widest leading-none border-l-2 border-current pl-3">
                    {artist.status} <br />
                    <span className="opacity-50">CLASS OF {artist.season}</span>
                  </div>
                  <Plus className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                <div className="relative w-full aspect-square mt-4 mb-4 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl scale-95 group-active:scale-100 md:group-hover:scale-100">
                  <Image 
                    src={artistImg?.imageUrl ?? 'https://picsum.photos/600/600'} 
                    alt={artist.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 md:bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="relative z-10">
                   <h3 className="text-3xl md:text-4xl font-black tracking-tighter italic font-headline leading-none lowercase">
                     {artist.name}
                   </h3>
                </div>
              </div>
            );
          })}

          {/* PLAYLIST BLOCK */}
          <div className="lg:col-span-1 bg-zinc-950 text-white p-8 md:p-10 flex flex-col justify-between rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden min-h-[280px]">
             <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                   <Play className="w-5 h-5 md:w-6 md:h-6 text-black fill-black" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black tracking-tighter italic leading-tight lowercase">
                  the official <br /> garden <br /> <span className="text-gilded">anthems.</span>
                </h4>
             </div>
             <p className="relative z-10 text-[9px] md:text-[10px] font-bold text-white/40 tracking-widest mt-6 md:mt-8 uppercase">
                Listen to the curated selection of our performers.
             </p>
             <div className="absolute -right-20 -bottom-10 md:-right-24 md:bottom-0 w-48 h-48 md:w-64 md:h-64 bg-zinc-900 rounded-full border border-white/5 flex items-center justify-center opacity-40">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950 rounded-full border border-white/10" />
             </div>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter font-headline leading-[0.9] md:leading-[0.8] mb-10 md:mb-12 lowercase">
            want to <span className="text-gilded italic">perform?</span>
          </h2>
          <Button className="btn-gold h-14 md:h-16 px-10 md:px-16 text-sm md:text-lg tracking-tighter uppercase w-full md:w-auto">
            Submit Your Portfolio
          </Button>
        </div>
      </section>
    </main>
  );
}