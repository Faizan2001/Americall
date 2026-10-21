/*
 * Open-collection photographs of the client trades (never presented as Americall's own work).
 * Each entry is credited in the footer. Filled in by the redesign build (R-08).
 */
export interface PhotoCredit {
	slug: string;
	file: string;
	alt: string;
	caption: string;
	title: string;
	author: string;
	licence: string;
	licenceUrl: string;
	source: string;
	changes?: string;
}

export const photoCredits: PhotoCredit[] = [
  {
    "slug": "solar",
    "file": "/images/industries/solar-installation.webp",
    "alt": "A gloved worker carrying a solar panel",
    "caption": "Solar installation",
    "title": "Solar installation",
    "author": "Kindel Media",
    "licence": "Pexels License",
    "licenceUrl": "https://www.pexels.com/license/",
    "source": "https://www.pexels.com/photo/a-person-carrying-a-solar-panel-9875449/"
  },
  {
    "slug": "real-estate",
    "file": "/images/industries/home-exterior.webp",
    "alt": "A suburban home in Boise, Idaho at dusk",
    "caption": "Residential property",
    "title": "Residential property",
    "author": "Binyamin Mellish",
    "licence": "Pexels License",
    "licenceUrl": "https://www.pexels.com/license/",
    "source": "https://www.pexels.com/photo/brown-and-gray-painted-house-in-front-of-road-1396122/"
  }
];
