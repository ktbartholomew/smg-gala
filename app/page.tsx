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
            {/* <div className="flex flex-col md:flex-row gap-8 items-center md:justify-center text-xl mb-16">
              <div>
                <Link href={content.buyTicketsUrl} target="_blank">
                  <GlowButton>{content.homePrimaryButtonText}</GlowButton>
                </Link>
              </div>
              <div>
                <Link href={content.sponsorCTAUrl}>
                  <Button>{content.homeSecondaryButtonText}</Button>
                </Link>
              </div>
            </div> */}

            {content.aboutSaintMariaGoretti}
          </div>
        </BorderCard>
      </div>

      {/* <SponsorsList /> */}
    </>
  );
}
