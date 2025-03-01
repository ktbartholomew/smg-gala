import { StaticImageData } from "next/image";
import barnesvideogroup from "@/app/sponsors/barnes-video-group-logo.png";
import printmailpro from "@/app/sponsors/printmailpro-logo.png";
import fwccu from "@/app/sponsors/fort-worth-community-credit-union.png";
import drsalexander from "@/app/sponsors/drs-alexander.png";

type Sponsor = {
  name: string;
  logo?: StaticImageData;
  logoUrl?: string;
  website?: string;
};

const content = {
  schoolWebsiteUrl: "https://www.smgschool.org/",
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
  buyTicketsUrl:
    "https://my.onecause.com/event/organizations/sf-001C000001ZT1UOIA1/events/vevt:da3fa58a-cda0-42c0-9f0e-a820905eb632/home/story",
  sponsorCTAUrl: `https://eventsupporter.onecause.com/event/organizations/sf-001C000001ZT1UOIA1/events/vevt:da3fa58a-cda0-42c0-9f0e-a820905eb632/sponsorship-packages`,
  sponsorCTAHeadline: "Sponsor SMG’s Platinum Gala",
  sponsorCTASubHeadline:
    "Support our mission of Catholic Education by becoming a sponsor today!",
  tier0sponsorName: "Title",
  tier1sponsorName: "Platinum",
  tier2sponsorName: "Gold",
  tier3sponsorName: "Silver",
  tier4sponsorName: "Bronze",
  tier5sponsorName: "Ruby",
  tier0Sponsors: [
    {
      logo: barnesvideogroup,
      name: "Barnes Video Group",
      website: "https://www.barnesvideogroup.com/",
    },
  ] as Sponsor[],
  tier1Sponsors: [
    {
      name: "James and Sherry Lewis",
    },
  ] as Sponsor[],
  tier2Sponsors: [
    {
      name: "PrintMailPro",
      logo: printmailpro,
      website: "https://printmailpro.com/",
    },
  ] as Sponsor[],
  tier3Sponsors: [
    {
      name: "Drs Alexander Orthodontics",
      logo: drsalexander,
      website: "https://www.drsalexander.com/",
    },
  ] as Sponsor[],
  tier4Sponsors: [
    {
      name: "Fort Worth Community Credit Union",
      logo: fwccu,
      website: "https://www.ftwccu.org/",
    },
  ] as Sponsor[],
  tier5Sponsors: [
    {
      name: "The Guerrero Family",
    },
  ] as Sponsor[],
};

export default content;
