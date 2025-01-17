import { StaticImageData } from "next/image";

type Sponsor = {
  name: string;
  logo: StaticImageData;
  logoUrl?: string;
  website?: string;
};

const content = {
  siteTitle: "Saint Maria Goretti Platinum Gala",
  siteDescription:
    "Celebrate 70 years of exceptional Catholic education with Saint Maria Goretti Catholic School.",
  eventName: "Saint Maria Goretti Platinum Gala",
  homeLogoLeader:
    "Join Saint Maria Goretti Catholic School as we celebrate 70 years of providing outstanding Catholic education to the entire Arlington community.",
  homePrimaryButtonText: "Buy Tickets",
  homeSecondaryButtonText: "Be a Sponsor",
  eventAddress: (
    <>
      <strong>Saint Maria Goretti Platinum Gala</strong>
      <br />
      April 26th, 2025 <br />
      The Hilton Arlington
    </>
  ),
  aboutSaintMariaGoretti: (
    <>
      <p>
        Since 1954, Saint Maria Goretti Catholic School has been a fixture of
        Catholic life in Arlington. Countless alumni have gotten their start at
        SMG and then gone on to be invaluable members of the Arlington
        community. At Saint Maria Goretti Catholic School, we do more than raise
        good Catholic students; we raise good citizens.
      </p>
      <p>
        We are happy to invite you to our 70th anniversary Platinum Gala to
        celebrate the decades of contributions we have made in Arlington, and to
        support as we prepare for 70 <strong>more</strong>, even better years!
      </p>
    </>
  ),
  buyTicketsUrl: "https://one.bidpal.net/athomedd2024/welcome",
  sponsorCTAUrl: `mailto:spirit@smgschool.org?subject=${encodeURIComponent(
    "I'd like to be a sponsor of the SMG Platinum Gala!"
  )}`,
  sponsorCTAHeadline: "Sponsor SMG’s Platinum Gala",
  sponsorCTASubHeadline:
    "Support our mission of Catholic Education by becoming a sponsor today!",
  tier0Sponsors: [] as Sponsor[],
  tier1Sponsors: [] as Sponsor[],
};

export default content;
