import { groq } from "@/lib/groq";

type EventItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  genre?: string;
  city: string;
  venue: string;
  startDate: string;
  time: string;
  price: number;
  isFree: boolean;
  tags: string[];
};

type Filters = {
  city?: string | null;
  category?: string | null;
  genre?: string | null;
  priceMax?: number | null;
  isFree?: boolean | null;
  matchedTags?: string[];
};

type AIResult = {
  reply: string;
  filters: Filters;
};

function uniqueValues(events: EventItem[], key: keyof EventItem) {
  return [...new Set(events.map((event) => event[key]).filter(Boolean))] as string[];
}

function uniqueTags(events: EventItem[]) {
  return [...new Set(events.flatMap((event) => event.tags || []))];
}

export async function extractReplyAndFiltersWithGroq(
  query: string,
  events: EventItem[]
): Promise<AIResult> {
  const cities = uniqueValues(events, "city");
  const categories = uniqueValues(events, "category");
  const genres = uniqueValues(events, "genre");
  const tags = uniqueTags(events);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `
You are an AI event search assistant.

You must return ONLY valid JSON.

Return this exact shape:
{
  "reply": "string",
  "filters": {
    "city": string | null,
    "category": string | null,
    "genre": string | null,
    "priceMax": number | null,
    "isFree": boolean | null,
    "matchedTags": string[]
  }
}

Rules:
- Do not invent events.
- Keep reply short, natural, and helpful.
- Only use these known values when possible.
- If unsure, use null or [].
- matchedTags must only contain values from the allowed tags list.

Allowed cities: ${JSON.stringify(cities)}
Allowed categories: ${JSON.stringify(categories)}
Allowed genres: ${JSON.stringify(genres)}
Allowed tags: ${JSON.stringify(tags)}

Interpret naturally:
- "free", "no charge", "free entry" => isFree true
- "under 1000", "below 2000", "max 1500" => priceMax number
`
      },
      {
        role: "user",
        content: query
      }
    ]
  });

  const content = completion.choices[0]?.message?.content ?? "{}";

  let parsed: any = {};
  try {
    parsed = JSON.parse(content);
  } catch {
    return {
      reply: "I could not fully understand that request, but I tried to find the closest matches.",
      filters: {
        city: null,
        category: null,
        genre: null,
        priceMax: null,
        isFree: null,
        matchedTags: [],
      },
    };
  }

  return {
    reply:
      typeof parsed.reply === "string"
        ? parsed.reply
        : "Here are the most relevant events I found.",
    filters: {
      city: typeof parsed.filters?.city === "string" ? parsed.filters.city : null,
      category: typeof parsed.filters?.category === "string" ? parsed.filters.category : null,
      genre: typeof parsed.filters?.genre === "string" ? parsed.filters.genre : null,
      priceMax:
        typeof parsed.filters?.priceMax === "number" ? parsed.filters.priceMax : null,
      isFree:
        typeof parsed.filters?.isFree === "boolean" ? parsed.filters.isFree : null,
      matchedTags: Array.isArray(parsed.filters?.matchedTags)
        ? parsed.filters.matchedTags.filter((tag: unknown) => typeof tag === "string")
        : [],
    },
  };
}