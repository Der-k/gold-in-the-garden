'use client';

import { VendorSignupForm } from '@/components/sections/vendor-signup-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Coffee, Beer, Shirt, Gem, Gamepad2 } from 'lucide-react';

const vendorOpportunities = [
  {
    title: 'Gourmet Food Trucks',
    description: 'Serve delicious and unique street food to hungry attendees.',
    icon: Truck,
  },
  {
    title: 'Artisanal Beverages',
    description: 'Offer craft coffee, fresh juices, and creative mocktails.',
    icon: Coffee,
  },
  {
    title: 'Craft & Local Bars',
    description: 'Showcase local breweries, distilleries, and unique bar concepts.',
    icon: Beer,
  },
  {
    title: 'Fashion & Apparel',
    description: 'Sell your unique clothing, accessories, and festival wear.',
    icon: Shirt,
  },
  {
    title: 'Handmade Crafts',
    description: 'Display and sell your artisanal jewelry, art, and crafts.',
    icon: Gem,
  },
  {
    title: 'Interactive Experiences',
    description: 'Engage the crowd with photo booths, games, or unique activities.',
    icon: Gamepad2,
  },
];


export default function VendorsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Partner With Us
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Become a part of the Gold in the Garden experience. We are looking for unique and high-quality vendors to join our celebration of Kenyan culture.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Explore Opportunities</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We welcome a variety of vendors to create a rich and diverse festival atmosphere. Here are some of the categories we're looking for:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendorOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <div key={opportunity.title} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vendor-application" className="py-20 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Vendor Application</CardTitle>
                <CardDescription>Ready to join us? Fill out the form below to apply.</CardDescription>
              </CardHeader>
              <CardContent>
                <VendorSignupForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
