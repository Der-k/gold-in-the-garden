import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Gold in the Garden. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
