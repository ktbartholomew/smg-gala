import { MonteCarlo } from "next/font/google";
import Image from "next/image";
import content from "./content";
import BorderCard from "@/components/border-card";
import GlowButton from "@/components/glow-button";
import Button from "@/components/button";
import placeholderLogo from "./smg-70-platinum-logo-transparent.webp";
import Link from "next/link";

const monteCarlo = MonteCarlo({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="max-w-[80ch] mx-auto md:mt-8 ">
        <BorderCard background="translucent">
          <div className="p-4 pt-0 md:pt-0 md:p-16">
            <Image
              src={placeholderLogo}
              alt="Platinum Gala Logo"
              className="mx-auto"
              priority
              width={400}
              height={400}
            />
            <h1
              className={`${monteCarlo.className} text-center text-5xl md:text-7xl text-balance font-bold mb-8`}
            >
              {content.eventName}
            </h1>
            <div className="text-xl md:text-2xl">
              <p className="text-center mb-16">{content.homeLogoLeader}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center md:justify-center text-xl mb-16">
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
            </div>
            <p className="text-xl md:text-2xl text-center">
              {content.eventAddress}
            </p>
            {content.aboutSaintMariaGoretti}
          </div>
        </BorderCard>
      </div>

      {content.tier0Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier0sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier0Sponsors.map((sponsor, idx) => (
              <div key={idx} className="p-4 w-1/2 md:w-1/3">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={250}
                    />
                  ) : (
                    <div className="text-3xl leading-tight bold text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.tier1Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier1sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier1Sponsors.map((sponsor, idx) => (
              <div key={idx} className="p-4 w-1/2 md:w-1/3">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={250}
                    />
                  ) : (
                    <div className="text-3xl leading-tight bold text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.tier2Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier2sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier2Sponsors.map((sponsor, idx) => (
              <div key={idx} className="p-4 w-1/2 md:w-1/3">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={250}
                    />
                  ) : (
                    <div className=" text-2xl md:text-3xl leading-tight bold text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.tier3Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier3sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier3Sponsors.map((sponsor, idx) => (
              <div key={idx} className="p-4 w-1/2 md:w-1/3">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={250}
                    />
                  ) : (
                    <div className=" text-2xl md:text-3xl leading-tight bold text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.tier4Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier4sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier3Sponsors.map((sponsor, idx) => (
              <div key={idx} className="p-4 w-1/2 md:w-1/3">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={250}
                    />
                  ) : (
                    <div className=" text-2xl md:text-3xl leading-tight bold text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
