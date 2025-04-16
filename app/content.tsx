import { StaticImageData } from "next/image";
import barnesvideogroup from "@/app/sponsors/barnes-video-group-logo.png";
import printmailpro from "@/app/sponsors/printmailpro-logo.png";
import fwccu from "@/app/sponsors/fort-worth-community-credit-union.png";
import drsalexander from "@/app/sponsors/drs-alexander.png";
import marquezbakery from "@/app/sponsors/marquez-bakery.png";
import laisla from "@/app/sponsors/la-isla.png";
import mgp from "@/app/sponsors/michael-gilles-purgason.png";
import willowpark from "@/app/sponsors/willow-park-family-dentistry.png";
import alvarado from "@/app/sponsors/alvarado-family-dentistry.png";
import rrap from "@/app/sponsors/rick-and-rays-logo.webp";

type Sponsor = {
  name: string;
  logo?: StaticImageData;
  logoUrl?: string;
  website?: string;
};

type SponsorGroup = {
  name: string;
  sponsorSize: "small" | "medium" | "large";
  sponsors: Sponsor[];
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
  homeSecondaryButtonText: "Enter the Tuition Raffle",
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
  sponsorCTAUrl: `https://my.onecause.com/event/organizations/sf-001C000001ZT1UOIA1/events/vevt:da3fa58a-cda0-42c0-9f0e-a820905eb632/shop/raffle`,
  sponsorCTAHeadline: "Sponsor SMG’s Platinum Gala",
  sponsorCTASubHeadline:
    "Support our mission of Catholic Education by becoming a sponsor today!",

  sponsorGroups: [
    {
      name: "Title Sponsor",
      sponsorSize: "large",
      sponsors: [
        {
          name: "Barnes Video Group",
          logo: barnesvideogroup,
          website: "https://www.barnesvideogroup.com/",
        },
      ],
    },
    {
      name: "Platinum Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "James and Sherry Lewis",
        },
      ],
    },
    {
      name: "Gold Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Rick & Ray's Auto Plaza",
          logo: rrap,
          website: "https://rickandraysautoplaza.com/",
        },
      ],
    },
    {
      name: "Printing Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "PrintMailPro",
          logo: printmailpro,
          website: "https://printmailpro.com/",
        },
      ],
    },
    {
      name: "Silver Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Michael Gilles Purgason Foundation",
          logo: mgp,
          website: "https://www.michaelgpurgasonfoundation.org/",
        },
      ],
    },
    {
      name: "Auction Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Drs Alexander Orthodontics",
          logo: drsalexander,
          website: "https://www.drsalexander.com/",
        },
      ],
    },
    {
      name: "Bronze Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Fort Worth Community Credit Union",
          logo: fwccu,
          website: "https://www.ftwccu.org/",
        },
      ],
    },
    {
      name: "Bronze Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Alvarado Family Dentistry",
          logo: alvarado,
          website: "https://www.alvaradodentist.com/",
        },
      ],
    },
    {
      name: "Bronze Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Willow Park Family Dentistry",
          logo: willowpark,
          website: "http://www.willowparkfamilydentistry.com/",
        },
      ],
    },
    {
      name: "Ruby Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "La Isla Restaurant",
          logo: laisla,
          website: "https://laislatx.com/",
        },
      ],
    },
    {
      name: "Ruby Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "The Guerrero Family",
        },
      ],
    },
    {
      name: "Dessert Sponsor",
      sponsorSize: "medium",
      sponsors: [
        {
          name: "Marquez Bakery",
          logo: marquezbakery,
          website: "https://www.marquezbakery.com/",
        },
      ],
    },
  ] as SponsorGroup[],
};

export default content;
