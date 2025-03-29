"use server";

import Image from "next/image";
import content from "../app/content";

export async function SponsorsList() {
  return (
    <div className="mt-8 flex flex-wrap justify-center text-center">
      {content.sponsorGroups.map((group, idx) => {
        let groupClass: string;
        switch (group.sponsorSize) {
          case "large":
            groupClass = "mb-24 w-full";
            break;
          case "medium":
            groupClass = "mb-8 w-1/2 lg:w-1/3";
            break;
          case "small":
            groupClass = "mb-8 w-1/4 lg:w-1/4";
            break;
        }

        return (
          <div className={groupClass} key={idx}>
            <h2 className="text-lg font-bold text-balance">
              {group.name}
              {group.sponsors.length > 1 ? "s" : ""}
            </h2>
            <div className="flex flex-wrap justify-center">
              {group.sponsors.map((sponsor, idx) => {
                return (
                  <div key={idx} className="p-4 w-1/2 md:w-1/3">
                    <a href={sponsor.website} target="_blank" rel="noopener">
                      {sponsor.logo ? (
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          title={sponsor.name}
                          loading="lazy"
                          width={600}
                        />
                      ) : (
                        <div className="text-3xl leading-tight bold text-center text-balance font-bold">
                          {sponsor.name}
                        </div>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
