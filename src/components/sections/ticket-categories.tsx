import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Ticket } from "lucide-react";

const ticketTiers = [
  {
    name: "Regular Access",
    price: "Ksh 2,500",
    description: "Experience the magic of Gold in the Garden with general access.",
    features: [
      "Full access to the main concert area",
      "Food and drink vendors available",
      "A night to remember",
    ],
    cta: "Buy Regular",
    variant: "secondary",
  },
  {
    name: "VIP Experience",
    price: "Ksh 7,000",
    description: "Elevate your night with exclusive perks and the best views.",
    features: [
      "Access to exclusive VIP lounge",
      "Prime viewing area near the stage",
      "Complimentary welcome drink",
      "Dedicated restrooms",
    ],
    cta: "Buy VIP",
    variant: "primary",
  },
];

export function TicketCategories() {
  return (
    <section id="tickets" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Secure Your Spot
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose your experience and be part of this unforgettable musical journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ticketTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${tier.variant === 'primary' ? 'border-primary shadow-primary/20' : ''}`}
            >
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  size="lg"
                  className={`w-full ${tier.variant === 'primary' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                >
                  <a href="https://example.com/ticketing" target="_blank" rel="noopener noreferrer">
                    <Ticket className="mr-2 h-5 w-5" />
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
