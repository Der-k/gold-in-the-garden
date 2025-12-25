import type { LucideIcon } from 'lucide-react';
import { Music, Palette, Theater, UtensilsCrossed, Film, Mic, Mountain, Dumbbell } from 'lucide-react';

export const eventCategories = [
    "Music",
    "Art",
    "Theater",
    "Food",
    "Film",
    "Comedy",
    "Outdoors",
    "Sports",
] as const;

export type EventCategory = (typeof eventCategories)[number];

export type TSEvent = {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    date: string;
    location: string;
    category: EventCategory;
    organizer: string;
    image: string;
};

export const events: TSEvent[] = [
    {
        id: "1",
        title: "Gold in the garden",
        description: "An open-air festival featuring the best local bands.",
        longDescription: "Join us for the annual Summer Breeze Music Fest at Central Park. Enjoy a full day of live music, food trucks, and good vibes. Lineup includes The Wandering Souls, Electric Dream, and more. Bring your friends and a blanket!",
        date: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString(),
        location: "Central Park Amphitheater",
        category: "Music",
        organizer: "City Events Co.",
        image: "placeholder-1",
    },
    {
        id: "2",
        title: "Downtown Art Walk",
        description: "Explore local galleries and street art installations.",
        longDescription: "The Downtown Art Walk is a self-guided tour of the city's vibrant art scene. Dozens of galleries open their doors late, and artists showcase their work on the streets. A perfect evening for art lovers.",
        date: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString(),
        location: "Art District",
        category: "Art",
        organizer: "Art's Collective",
        image: "placeholder-2",
    },
    {
        id: "3",
        title: "Shakespeare in the Park",
        description: "A classic performance of 'A Midsummer Night's Dream'.",
        longDescription: "Experience the magic of Shakespeare under the stars. The renowned Bard's Troupe presents 'A Midsummer Night's Dream' in this free, family-friendly event. Don't forget your picnic basket!",
        date: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString(),
        location: "Greenwood Park",
        category: "Theater",
        organizer: "Bard's Troupe",
        image: "placeholder-3",
    },
    {
        id: "4",
        title: "International Food Fair",
        description: "Taste the world in a day with dozens of food stalls.",
        longDescription: "Embark on a culinary journey at the International Food Fair. From spicy tacos to delicate sushi, explore flavors from around the globe. Live music and cultural performances throughout the day.",
        date: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString(),
        location: "Exhibition Center",
        category: "Food",
        organizer: "Global Bites Inc.",
        image: "placeholder-4",
    },
    {
        id: "6",
        title: "Laughter Lounge Comedy Night",
        description: "Get ready to laugh with a lineup of hilarious comedians.",
        longDescription: "The Laughter Lounge brings you a night of non-stop fun. Featuring stand-up from local favorites and a surprise headliner, it's the perfect way to unwind and have a good time.",
        date: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString(),
        location: "The Gilded Stage",
        category: "Comedy",
        organizer: "Funny Bone Productions",
        image: "placeholder-6",
    },
    {
        id: "7",
        title: "Mountain View Hike",
        description: "A guided group hike to the summit of Mount Beacon.",
        longDescription: "Join our experienced guides for a scenic hike up Mount Beacon. Enjoy breathtaking panoramic views from the summit. This is a moderate-level hike, suitable for most fitness levels. Pack water and snacks!",
        date: new Date(new Date().setDate(new Date().getDate() + 18)).toISOString(),
        location: "Mount Beacon Trailhead",
        category: "Outdoors",
        organizer: "Adventure Seekers Club",
        image: "placeholder-7",
    },
    {
        id: "8",
        title: "Community Charity Run",
        description: "A 5K run to support local charities.",
        longDescription: "Lace up your running shoes for a good cause! The annual Community Charity Run is a 5K race through the heart of the city, with all proceeds going to local community projects. Walk, jog, or run!",
        date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString(),
        location: "City Hall Plaza",
        category: "Sports",
        organizer: "City Foundation",
        image: "placeholder-8",
    },
];

export const categoryIcons: Record<EventCategory, LucideIcon> = {
    Music: Music,
    Art: Palette,
    Theater: Theater,
    Food: UtensilsCrossed,
    Film: Film,
    Comedy: Mic,
    Outdoors: Mountain,
    Sports: Dumbbell,
};
