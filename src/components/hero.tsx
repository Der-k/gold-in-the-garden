import { Button } from "@/components/ui/button";

const stats = [
    { value: "06+", label: "Ready Demos" },
    { value: "20+", label: "Inner Pages" },
    { value: "200+", label: "Pre-Made Blocks" },
]

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-40 pb-20 bg-primary">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-bold tracking-tight text-black sm:text-7xl font-headline">
                    Event search, details and recommendations
                </h1>
                <p className="mt-6 text-lg leading-8 text-black/80">
                    Discover and engage with the best events happening around you. Your one-stop destination for meetups, conferences, and more.
                </p>
            </div>
            <div className="mt-16 flow-root">
                <div className="-m-2 rounded-xl bg-white p-2 ring-1 ring-inset ring-black/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-y-2">
                                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-black">{stat.value}</p>
                                <p className="text-sm sm:text-base leading-6 text-black/80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
