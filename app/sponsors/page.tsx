"use server";

import content from "../content";

export default async function Sponsors() {
  return (
    <>
      <div className="max-w-[80ch] mx-auto my-4 md:my-32 ">
        <h1 className="text-center font-bold tracking-tight text-5xl mb-8">
          {content.sponsorCTAHeadline}
          <div className="mt-4 text-xl">{content.sponsorCTASubHeadline}</div>
        </h1>
      </div>
      <div className="grid grid-cols-3 max-w-[80vw] mx-auto">
        <div className="bg-gradient-to-tr from-zinc-900/90 to-zinc-900/90 backdrop-blur-sm p-8 mt-16">
          Silver Tier
        </div>
        <div className="bg-gradient-to-tr from-zinc-900/90 to-zinc-900/90 backdrop-blur-sm p-8 border-4 border-zinc-200">
          Gold Tier
        </div>
        <div className="bg-gradient-to-tr from-zinc-900/90 to-zinc-900/90 backdrop-blur-sm p-8 mt-16">
          Platinum Tier
        </div>
      </div>
    </>
  );
}
