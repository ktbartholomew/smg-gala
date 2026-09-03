import EventGallery from "@/components/event-gallery";
import FlowerGarland from "@/components/flower-garland";
import { SponsorsList } from "@/components/sponsors-list";

export default function Home() {
  return (
    <main>
      <section className="save-date-hero relative overflow-hidden px-6 py-16 sm:px-10">
        <FlowerGarland />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-5xl flex-col justify-center text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)] sm:text-sm">
            Saint Maria Goretti Catholic School
          </p>
          <h1 className="font-serif text-6xl leading-none tracking-tight sm:text-8xl md:text-9xl">
            In Full Bloom
          </h1>
          <div className="mx-auto my-10 h-px w-20 bg-[var(--accent)]" />
          <p className="mb-3 text-xl font-semibold uppercase tracking-[0.16em] sm:text-2xl">
            The 2027 Saint Maria Goretti Gala
          </p>
          <p className="mb-0 text-lg text-[var(--muted-foreground)] sm:text-2xl">
            May 1, 2027
          </p>
          <div className="mx-auto mt-10 max-w-xl border-y border-[var(--line)] py-6 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            <p className="mb-1 font-semibold text-[var(--foreground)]">
              Live! by Loews — Arlington, Texas
            </p>
            <p className="mb-0">1600 E. Randol Mill Road</p>
          </div>
          <p className="mx-auto mt-10 mb-0 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Save the date for an evening in support of exceptional Catholic
            education in Arlington. More details will be announced soon.
          </p>
        </div>
      </section>

      {/* Annual-reset archive: retain these sections for the later campaign cycle. */}
      <section aria-labelledby="past-sponsors" className="archive-section border-t border-[var(--line)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="archive-kicker">With gratitude</p>
          <h2 id="past-sponsors" className="archive-heading">Thank you to our 2026 sponsors and donors</h2>
          <p className="archive-intro">Your generosity made last year&apos;s gala possible and continues to strengthen the Saint Maria Goretti community.</p>
        </div>
        <SponsorsList />
      </section>

      <section aria-labelledby="past-gallery" className="archive-section border-t border-[var(--line)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="archive-kicker">A look back</p>
          <h2 id="past-gallery" className="archive-heading">Moments from the 2026 gala</h2>
          <p className="archive-intro">Thank you to every guest, volunteer, and friend who celebrated with us.</p>
        </div>
        <EventGallery />
      </section>
    </main>
  );
}
