"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Ticket, Crown, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Data Definitions
const ticketCategories = [
  {
    name: "General Admission",
    price: "3,500",
    description: "Access to the main garden grounds and all stages.",
    color: "border-secondary text-secondary",
    bg: "bg-secondary/5",
    features: ["Standard Entry", "Access to Food Bazaar", "Main Stage Access", "The Garden Experience"],
    icon: <Ticket className="w-6 h-6" />,
  },
  {
    name: "VIP Garden",
    price: "8,000",
    description: "Premium views and dedicated service in the Crimson lounge.",
    color: "border-accent text-accent",
    bg: "bg-accent/5",
    features: ["Fast-track Entry", "VIP Lounge Access", "Dedicated Bar", "Front-of-Stage Zone", "Event Merch Pack"],
    icon: <Crown className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "Golden Suite",
    price: "25,000",
    description: "The ultimate luxury. All-inclusive hospitality.",
    color: "border-primary text-zinc-900",
    bg: "bg-primary/10",
    features: ["Ultra-Private Suite", "Complimentary Gourmet Dining", "Open Bar (Premium)", "Meet & Greet Entry", "Valet Parking"],
    icon: <Star className="w-6 h-6" />,
  },
];

// 2. The Main Component (Must be Default Export)
export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-white font-sans uppercase overflow-x-hidden">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-20 md:pt-24 pb-12 px-6 border-b border-zinc-200">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-zinc-400 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter italic font-headline mb-4">
                Secure Your <br /> <span className="text-gilded">Passage.</span>
              </h1>
              <p className="text-xs md:text-sm font-bold text-zinc-400 tracking-widest max-w-md">
                Select your level of immersion. All tickets include access to the 2026 Golden Era installation.
              </p>
            </div>
            <div className="hidden md:block text-right">
                <span className="text-[10px] font-black text-zinc-300 block mb-2 tracking-[0.5em]">Inventory Status</span>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">85% Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKET CATEGORIES */}
      <section className="py-12 md:py-24 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketCategories.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${tier.color} ${tier.popular ? 'scale-105 z-10 shadow-xl' : 'opacity-90'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-6 py-2 rounded-full tracking-widest">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${tier.bg}`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter italic font-headline mb-2">{tier.name}</h3>
                <p className="text-[10px] font-bold text-zinc-400 tracking-wide lowercase italic h-8 leading-tight">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-xs font-black uppercase text-zinc-400">KES</span>
                <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 opacity-50" />
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full h-14 rounded-full font-black text-xs tracking-widest transition-all ${tier.popular ? 'btn-gold' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                SELECT TICKET
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMO SECTION */}
      <section className="py-12 px-6">
        <div className="container mx-auto bg-zinc-950 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
               <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full mb-6">
                 <Zap className="w-3 h-3 fill-primary" />
                 <span className="text-[10px] font-black tracking-widest uppercase">Early Bird Promo</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter italic font-headline mb-6">
                 HAVE A <span className="text-gilded">GARDEN CODE?</span>
               </h2>
               <p className="text-xs font-bold text-white/40 tracking-[0.2em] mb-8">
                 Enter your influencer or partner discount code to unlock exclusive pricing.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="ENTER CODE" 
                    className="bg-zinc-900 border border-white/10 rounded-full px-8 py-4 text-white font-black text-xs tracking-widest focus:outline-none focus:border-primary flex-1"
                  />
                  <Button className="bg-white text-black hover:bg-zinc-200 rounded-full h-12 px-8 font-black text-xs tracking-widest">
                    APPLY
                  </Button>
               </div>
            </div>
            
            <div className="flex gap-4 md:gap-8 opacity-20 md:opacity-100 text-primary">
               <ShieldCheck className="w-24 h-24 md:w-40 md:h-40" />
            </div>
          </div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 border-[40px] border-white/5 rounded-full" />
        </div>
      </section>

      {/* 4. BUYING CTA */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase font-headline leading-tight mb-4">
              Ready for the <span className="text-gilded italic">Golden Era?</span>
            </h2>
            <p className="text-[10px] font-bold text-zinc-400 tracking-[0.3em]">
              Checkout securely via M-Pesa, Card, or Bank Transfer.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <Button className="btn-gold h-20 text-xl font-black tracking-tighter uppercase w-full shadow-2xl hover:scale-[1.02] transition-transform">
               Proceed to Checkout
            </Button>
            <p className="text-[9px] font-bold text-zinc-300 tracking-widest">
              By proceeding, you agree to our Terms of Service and Garden Rules. All sales are final.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}