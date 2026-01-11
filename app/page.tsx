import Button from "@/components/button";
import content from "./content";
import BorderCard from "@/components/border-card";
import GlowButton from "@/components/glow-button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-[80ch] mx-auto md:mt-8 ">
        <BorderCard background="translucent">
          <Image
            className="mx-auto my-16"
            src="/a-toast-to-grace-lockup-square.svg"
            alt="meow"
            width={512}
            height={512}
          />
          <div className="p-4 pt-0 md:pt-0 md:p-16">
            <p className="text-xl md:text-2xl text-center">
              {content.eventAddress}
            </p>
            <div className="text-xl md:text-2xl">
              <p className="text-center mb-16 tracking-tight">
                {content.homeLogoLeader}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center md:justify-center text-xl mb-16">
              <div>
                <Link href={content.buyTicketsUrl} target="_blank">
                  <GlowButton>{content.homePrimaryButtonText}</GlowButton>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-champagne-darker bg-white rounded-lg shadow-md">
                <h4 className="text-center uppercase font-bold mb-2">
                  Be a Sponsor
                </h4>
                <p>
                  Sponsoring the SMG Gala is a great way to support the event,
                  in addition to getting your event tickets and recognition for
                  your sponsorship. There are many sponsorship levels to choose
                  from, so find the one that’s right for you!
                </p>
                <div className="text-center">
                  <Link
                    target="_blank"
                    href="https://my.onecause.com/event/organizations/sf-001C000001ZT1UOIA1/events/vevt:eae22bc7-f31a-4995-8b6c-e29edeb66399/sponsorship-packages"
                  >
                    <Button size="small">Be a sponsor</Button>
                  </Link>
                </div>
              </div>
              <div className="p-4 border border-champagne-darker bg-white rounded-lg shadow-md">
                <h4 className="text-center uppercase font-bold mb-2">
                  Donate Items
                </h4>
                <p>
                  The silent auction is a vital part of the SMG Gala, but we
                  need you to donate items and experiences to make it happen!
                  From merchandise to event tickets to travel vouchers, a
                  variety of donations makes the auction more exciting!
                </p>
                <div className="text-center">
                  <Link
                    target="_blank"
                    href="https://my.onecause.com/inventory/organizations/sf-001C000001ZT1UOIA1/events/vevt:eae22bc7-f31a-4995-8b6c-e29edeb66399/items/donate?context=event"
                  >
                    <Button size="small">Donate Items</Button>
                  </Link>
                </div>
              </div>
            </div>

            {content.aboutSaintMariaGoretti}
          </div>
        </BorderCard>
      </div>

      {/* <SponsorsList /> */}
    </>
  );
}
