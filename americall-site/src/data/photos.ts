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

export const photoCredits: PhotoCredit[] = [];
