import BorderCard from "@/components/border-card";
import EventGallery from "@/components/event-gallery";
import { SponsorsList } from "@/components/sponsors-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-1 md:px-4 md:mt-8">
        <BorderCard background="translucent">
          <div className="px-2 py-8 md:px-12 md:py-14">
            <Image
              alt="A Toast to Grace SMG Gala"
              className="mx-auto mb-8 w-48 md:w-64"
              height={512}
              priority
              src="/a-toast-to-grace-lockup-square.svg"
              width={512}
            />

            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h1 className="mb-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Thank You
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
                What a beautiful night for Saint Maria Goretti. Thank you to
                every sponsor, donor, volunteer, family, and friend who helped
                make this year&apos;s gala a joyful celebration of our school
                community.
              </p>
            </div>

            <EventGallery />
          </div>
        </BorderCard>
      </main>

      <SponsorsList />
    </>
  );
}
