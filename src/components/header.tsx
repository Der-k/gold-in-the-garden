import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { RecommendationsModal } from './recommendations-modal';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-transparent absolute top-0 z-40 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
          <div className="bg-white text-primary p-1.5 rounded-full">
            <CalendarDays className="h-5 w-5" />
          </div>
          <span className="font-headline text-2xl" style={{fontFamily: "'Dancing Script', cursive"}}>Gold in the garden</span>
        </Link>
        <nav className="flex items-center gap-2">
            <Link href="/events" passHref>
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                View Events
              </Button>
            </Link>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Contact Us
            </Button>
        </nav>
      </div>
    </header>
  );
}
