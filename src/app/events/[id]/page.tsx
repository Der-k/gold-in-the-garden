import { sampleEvents } from "@/lib/sample-events";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: Props) {
  const { id } = await params;

  const event = sampleEvents.find((e) => e.id === id);

  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-neutral-950">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${event.image || "/images/events/default.jpg"})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10">
          <span className="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-black">
            {event.category}
          </span>

          <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
            {event.title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            {event.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="text-xl font-bold">About the Event</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {event.description}
              </p>
            </div>

            {event.tags?.length ? (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Tags
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Event Details
              </h3>

              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <p><strong>City:</strong> {event.city}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <p><strong>Date:</strong> {event.startDate}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p>
                  <strong>Price:</strong> {event.isFree ? "Free Entry" : `KSh ${event.price}`}
                </p>
              </div>
            </div>

            <button className="w-full rounded-[20px] bg-black py-3 text-sm font-medium text-white hover:opacity-90">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}