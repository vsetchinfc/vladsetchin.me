export type IconName =
	| "terminal"
	| "cpu"
	| "code"
	| "database"
	| "cloud"
	| "gear"
	| "bot"
	| "layers"
	| "compass"
	| "mail"
	| "folder"
	| "pen"
	| "briefcase";

export interface IconDef {
	viewBox: string;
	markup: string;
}

export const ICONS: Record<IconName, IconDef> = {
	terminal: {
		viewBox: "0 0 24 24",
		markup: `<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 9l3 3-3 3"/><line x1="12" y1="15" x2="17" y2="15"/>`,
	},
	cpu: {
		viewBox: "0 0 24 24",
		markup: `<rect x="7" y="7" width="10" height="10" rx="1.5"/><line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/><line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/><line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/>`,
	},
	code: {
		viewBox: "0 0 24 24",
		markup: `<polyline points="9,5 3,12 9,19"/><polyline points="15,5 21,12 15,19"/>`,
	},
	database: {
		viewBox: "0 0 24 24",
		markup: `<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>`,
	},
	cloud: {
		viewBox: "0 0 24 24",
		markup: `<path d="M7 18a4 4 0 0 1-1-7.9 5 5 0 0 1 9.6-2A4.5 4.5 0 0 1 18 18z"/>`,
	},
	gear: {
		viewBox: "0 0 24 24",
		markup: `<circle cx="12" cy="12" r="3.2"/><line x1="12" y1="2.5" x2="12" y2="5.5"/><line x1="12" y1="18.5" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5.5" y2="12"/><line x1="18.5" y1="12" x2="21.5" y2="12"/><line x1="5" y1="5" x2="7.2" y2="7.2"/><line x1="16.8" y1="16.8" x2="19" y2="19"/><line x1="5" y1="19" x2="7.2" y2="16.8"/><line x1="16.8" y1="7.2" x2="19" y2="5"/>`,
	},
	bot: {
		viewBox: "0 0 24 24",
		markup: `<rect x="5" y="9" width="14" height="11" rx="2"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="3.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="9.5" cy="14.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14.5" r="1.3" fill="currentColor" stroke="none"/><line x1="2" y1="13" x2="5" y2="13"/><line x1="19" y1="13" x2="22" y2="13"/>`,
	},
	layers: {
		viewBox: "0 0 24 24",
		markup: `<polygon points="12,4 20,8.5 12,13 4,8.5"/><polyline points="4,13 12,17.5 20,13"/><polyline points="4,17.5 12,22 20,17.5"/>`,
	},
	compass: {
		viewBox: "0 0 24 24",
		markup: `<circle cx="12" cy="12" r="9.5"/><polygon points="15,9 13,13 9,15 11,11"/>`,
	},
	mail: {
		viewBox: "0 0 24 24",
		markup: `<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M4 6.5l8 6 8-6"/>`,
	},
	folder: {
		viewBox: "0 0 24 24",
		markup: `<path d="M3 7a1.5 1.5 0 0 1 1.5-1.5h4.8l1.8 2h8.4A1.5 1.5 0 0 1 21 9v8.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/>`,
	},
	pen: {
		viewBox: "0 0 24 24",
		markup: `<path d="M4 20l1-4.2L14.2 6.6l3.2 3.2L8.2 19z"/><path d="M13 7.5l3.5 3.5"/><path d="M16.8 4.2l3 3-1.6 1.6-3-3z"/>`,
	},
	briefcase: {
		viewBox: "0 0 24 24",
		markup: `<rect x="3" y="8" width="18" height="11" rx="1.5"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>`,
	},
};
