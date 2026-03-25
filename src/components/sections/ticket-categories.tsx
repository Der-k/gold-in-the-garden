"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Ticket, Sparkles, ArrowRight, Crown } from "lucide-react";

const ticketTiers = [
  {
    name: "Regular Access",
    price: "2,500",
    description: "Experience the magic of Gold in the Garden with general access.",
    features: ["Standard Entry", "Access to Food Bazaar", "Main Stage Access"],
    cta: "Buy Regular",
    color: "border-secondary text-secondary",
    bg: "bg-secondary/5",
    icon: <Ticket className="w-5 h-5" />,
  },
  {
    name: "VIP Experience",
    price: "7,000",
    description: "Elevate your night with exclusive perks and the best views.",
    features: ["VIP Lounge Access", "Prime Viewing Zone", "Dedicated Bar"],
    cta: "Buy VIP",
    color: "border-accent text-accent",
    bg: "bg-accent/5",
    icon: <Crown className="w-5 h-5" />,
    popular: true,
  },
];

export function TicketCategories() {
  return (
    <section id="tickets" className="py-24 bg-white relative overflow-hidden">
      
      {/* 1. PROMO GUISE: Styled like the Ticket Page Promo */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3" /> Exclusive Batch
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
              Seasonal <span className="text-gilded">Promotions</span>
            </h3>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest max-w-md">
              Limited early-bird rates for the 2026 Golden Era season.
            </p>
          </div>
          
          <Button asChild className="relative z-10 bg-white text-black hover:bg-zinc-200 h-14 px-10 rounded-full font-black text-xs tracking-widest transition-all">
            <Link href="/tickets">
              SEE PROMOS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          {/* Decorative Geometric Detail from Ticket Page */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[20px] border-white/5 rounded-full" />
        </div>
      </div>

      {/* 2. QUICK BUY GRID: Matching the Ticket Page Card Style */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ticketTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 hover:shadow-2xl ${
                tier.color
              } ${tier.popular ? 'scale-105 z-10 shadow-xl' : 'opacity-90'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-black px-5 py-2 rounded-full tracking-widest">
                  RECOMMENDED
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${tier.bg}`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase font-headline">
                  {tier.name}
                </h3>
                <p className="text-zinc-400 text-[10px] font-bold tracking-wide mt-2 lowercase italic">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-[10px] font-black text-zinc-400">KES</span>
                <span className="text-5xl font-black tracking-tighter text-zinc-900">{tier.price}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 opacity-40" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full h-14 rounded-full font-black text-xs tracking-widest transition-all ${
                tier.popular ? 'btn-gold' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}>
                <Link href="/tickets">
                  <Ticket className="mr-2 h-4 w-4" />
                  {tier.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}