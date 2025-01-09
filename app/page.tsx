import Image from "next/image";
import content from "./content";
import BorderCard from "@/components/border-card";
import GlowButton from "@/components/glow-button";
import Button from "@/components/button";
import placeholderLogo from "./placeholder-logo.svg";
import placeholder from "./placeholder.jpg";

export default function Home() {
  return (
    <>
      <div className="max-w-[80ch] mx-auto mt-8 ">
        <BorderCard>
          <div className="p-16">
            <Image
              src={placeholderLogo}
              alt="Placeholder"
              className="mx-auto mb-8"
              priority
              width={400}
            />
            <div className="text-2xl">
              <p className="text-center mb-16">{content.homeLogoLeader}</p>
            </div>
            <div className="flex gap-8 justify-center text-xl mb-16">
              <GlowButton>{content.homePrimaryButtonText}</GlowButton>
              <Button>{content.homeSecondaryButtonText}</Button>
            </div>
            <p className="text-2xl text-center">{content.eventAddress}</p>
            {content.aboutSaintMariaGoretti}
          </div>
        </BorderCard>
      </div>

      <div className="max-w-[80ch] mx-auto mt-16 px-16">
        <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
          Platinum Sponsors
        </h2>
        <div className="grid gap-8 justify-center grid-cols-2">
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[80ch] mx-auto mt-16 px-16">
        <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
          Gold Sponsors
        </h2>
        <div className="grid gap-8 grid-cols-3">
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
          <div>
            <Image
              src={placeholder}
              alt="Placeholder"
              loading="lazy"
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
