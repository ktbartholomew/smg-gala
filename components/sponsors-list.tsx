"use server";

import Image from "next/image";
import content from "../app/content";

export async function SponsorsList({ useTiers }: { useTiers: boolean }) {
  const maxTierSize = Math.max(
    content.tier0Sponsors.length,
    content.tier1Sponsors.length,
    content.tier2Sponsors.length,
    content.tier3Sponsors.length,
    content.tier4Sponsors.length,
    content.tier5Sponsors.length
  );

  const singleTier = [
    ...content.tier0Sponsors,
    ...content.tier1Sponsors,
    ...content.tier2Sponsors,
    ...content.tier3Sponsors,
    ...content.tier4Sponsors,
    ...content.tier5Sponsors,
  ];

  if (!useTiers && maxTierSize < 3) {
    return (
      <div className="max-w-[160ch] mx-auto mt-16 px-4 md:px-16">
        <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
          Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {singleTier.map((sponsor, idx) => (
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
    );
  }

  return (
    <>
      {content.tier0Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier0sponsorName} Sponsor
            {content.tier0Sponsors.length > 1 && "s"}
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
            {content.tier4Sponsors.map((sponsor, idx) => (
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

      {content.tier5Sponsors.length > 0 && (
        <div className="max-w-[80ch] mx-auto mt-16 px-4 md:px-16">
          <h2 className="text-center font-bold tracking-tight text-5xl mb-8">
            {content.tier5sponsorName} Sponsors
          </h2>
          <div className="flex flex-wrap justify-center">
            {content.tier5Sponsors.map((sponsor, idx) => (
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
