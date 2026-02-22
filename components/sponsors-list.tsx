"use server";

import Image from "next/image";
import content from "../app/content";

export async function SponsorsList() {
  const sponsorItems = content.sponsorGroups.flatMap((group) =>
    group.sponsors.map((sponsor) => ({
      group,
      sponsor,
    })),
  );

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-0">
      {sponsorItems.map(({ group, sponsor }, idx) => {
        const isTopTier = group.sponsorSize === "large";
        const logoClass = isTopTier
          ? "mx-auto max-h-40 w-auto object-contain"
          : "mx-auto max-h-28 w-auto object-contain";
        return (
          <div
            className={isTopTier ? "col-span-full flex justify-center" : ""}
            key={`${group.name}-${sponsor.name}-${idx}`}
          >
            <div className={isTopTier ? "w-full max-w-3xl" : "w-full"}>
              <h2 className="text-lg font-bold text-balance">{group.name}</h2>
              <div className="mt-4 flex justify-center">
                <a href={sponsor.website} target="_blank" rel="noopener">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      title={sponsor.name}
                      loading="lazy"
                      width={600}
                      className={logoClass}
                    />
                  ) : (
                    <div className="text-3xl leading-tight text-center text-balance font-bold">
                      {sponsor.name}
                    </div>
                  )}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
