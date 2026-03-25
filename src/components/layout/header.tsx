"use client";

import Link from "next/link";
import { User, ShoppingCart, Menu, Home, Info, Music, Ticket, Image as ImageIcon, Store, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="text-3xl font-bold tracking-tight font-headline text-foreground">
                Gold in the Garden
            </Link>
            <nav className="hidden items-center gap-x-6 text-sm text-muted-foreground md:flex">
                <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors"><Home className="h-4 w-4" />Home</Link>
                <Link href="/#about" className="flex items-center gap-2 hover:text-primary transition-colors"><Info className="h-4 w-4" />About</Link>
                <Link href="/#artists" className="flex items-center gap-2 hover:text-primary transition-colors"><Music className="h-4 w-4" />Artists</Link>
                <Link href="/#tickets" className="flex items-center gap-2 hover:text-primary transition-colors"><Ticket className="h-4 w-4" />Tickets</Link>
                <Link href="/gallery" className="flex items-center gap-2 hover:text-primary transition-colors"><ImageIcon className="h-4 w-4" />Gallery</Link>
                <Link href="/vendors" className="flex items-center gap-2 hover:text-primary transition-colors"><Store className="h-4 w-4" />Vendors</Link>
                <Link href="/#contact" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4" />Contact</Link>
               <Link
  href="/ai-search"
  className="flex items-center gap-2 hover:text-primary transition-colors"
><Search className="h-4 w-4" />
  AI Search
</Link>
            </nav>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="ghost" asChild size="sm" className="hidden md:flex">
                <Link href="#">
                    <User className="mr-2 h-4 w-4" />
                    Log In
                </Link>
            </Button>
            <Button variant="ghost" asChild size="icon">
                <Link href="https://example.com/ticketing" target="_blank">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Buy Tickets</span>
                </Link>
            </Button>
            
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-8 pt-12">
                             <Link href="/" className="text-3xl font-bold tracking-tight font-headline text-foreground">
                                Gold in the Garden
                            </Link>
                            <nav className="flex flex-col gap-4 text-lg font-medium">
                                <SheetClose asChild><Link href="/" className="flex items-center gap-4 hover:text-primary transition-colors"><Home className="h-5 w-5" />Home</Link></SheetClose>
                                <SheetClose asChild><Link href="/#about" className="flex items-center gap-4 hover:text-primary transition-colors"><Info className="h-5 w-5" />About</Link></SheetClose>
                                <SheetClose asChild><Link href="/#artists" className="flex items-center gap-4 hover:text-primary transition-colors"><Music className="h-5 w-5" />Artists</Link></SheetClose>
                                <SheetClose asChild><Link href="/#tickets" className="flex items-center gap-4 hover:text-primary transition-colors"><Ticket className="h-5 w-5" />Tickets</Link></SheetClose>
                                <SheetClose asChild><Link href="/gallery" className="flex items-center gap-4 hover:text-primary transition-colors"><ImageIcon className="h-5 w-5" />Gallery</Link></SheetClose>
                                <SheetClose asChild><Link href="/vendors" className="flex items-center gap-4 hover:text-primary transition-colors"><Store className="h-5 w-5" />Vendors</Link></SheetClose>
                               <SheetClose asChild>
  <Link
    href="/ai-search"
    className="flex items-center gap-4 hover:text-primary transition-colors"
  >
    <Search className="h-5 w-5" />
    AI Search
  </Link>
</SheetClose>
                            </nav>
                            <div className="border-t pt-6">
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="#">
                                        <User className="mr-2 h-4 w-4" />
                                        Log In
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
