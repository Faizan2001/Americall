/*
 * Preferred demo time for the demo form: a weekday on the calendar, a time slot and a U.S. time zone.
 * It is a preference the team confirms, not a live booking. Everything date-based runs in the
 * browser, because the site is static and anything computed at build time would freeze.
 */

export const TIME_ZONES = [
	{ id: 'America/New_York', label: 'Eastern (ET)' },
	{ id: 'America/Chicago', label: 'Central (CT)' },
	{ id: 'America/Denver', label: 'Mountain (MT)' },
	{ id: 'America/Phoenix', label: 'Arizona (MST)' },
	{ id: 'America/Los_Angeles', label: 'Pacific (PT)' },
	{ id: 'America/Anchorage', label: 'Alaska (AKT)' },
	{ id: 'Pacific/Honolulu', label: 'Hawaii (HST)' },
] as const;

/* Half-hour slots from 9:00 AM to 4:30 PM, shown in the visitor's chosen time zone. */
export const TIME_SLOTS = Array.from({ length: 16 }, (_, i) => {
	const minutes = 9 * 60 + i * 30;
	const hour = Math.floor(minutes / 60);
	const minute = minutes % 60;
	const value = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
	const label = `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
	return { value, label };
});

const EASTERN = 'America/New_York';
const BOOKING_WINDOW_DAYS = 60;

/* Minutes the zone is ahead of UTC at a given instant (negative for U.S. zones). */
const offsetMinutes = (utcMs: number, timeZone: string) => {
	const parts = new Intl.DateTimeFormat('en-US', {
		timeZone,
		hourCycle: 'h23',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	}).formatToParts(new Date(utcMs));
	const get = (type: string) => Number(parts.find((part) => part.type === type)?.value);
	return (Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute')) - utcMs) / 60000;
};

/* The UTC instant for a wall-clock date and time in a time zone (handles daylight-saving changes). */
export const zonedTimeToUtc = (date: string, time: string, timeZone: string) => {
	const [year, month, day] = date.split('-').map(Number);
	const [hour, minute] = time.split(':').map(Number);
	const wall = Date.UTC(year, month - 1, day, hour, minute);
	let utc = wall - offsetMinutes(wall, timeZone) * 60000;
	const corrected = wall - offsetMinutes(utc, timeZone) * 60000;
	if (corrected !== utc) utc = corrected;
	return utc;
};

/* Pick the visitor's zone from the list: exact match first, then a zone with the same offsets in winter and summer. */
export const detectTimeZone = () => {
	let local = EASTERN;
	try {
		local = Intl.DateTimeFormat().resolvedOptions().timeZone || EASTERN;
	} catch {
		return EASTERN;
	}
	if (TIME_ZONES.some((zone) => zone.id === local)) return local;
	const year = new Date().getUTCFullYear();
	const winter = Date.UTC(year, 0, 15);
	const summer = Date.UTC(year, 6, 15);
	const match = TIME_ZONES.find(
		(zone) =>
			offsetMinutes(winter, zone.id) === offsetMinutes(winter, local) &&
			offsetMinutes(summer, zone.id) === offsetMinutes(summer, local),
	);
	return match?.id ?? EASTERN;
};

const toIsoDate = (date: Date) =>
	`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

/* First selectable day: the next weekday after today. Last: about two months out. */
export const bookingRange = (now = new Date()) => {
	const first = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	while (first.getDay() === 0 || first.getDay() === 6) first.setDate(first.getDate() + 1);
	const last = new Date(now.getFullYear(), now.getMonth(), now.getDate() + BOOKING_WINDOW_DAYS);
	return { min: toIsoDate(first), max: toIsoDate(last), today: toIsoDate(now) };
};

const zoneLabel = (id: string) => TIME_ZONES.find((zone) => zone.id === id)?.label ?? id;

/* Human-readable summary, plus the Eastern equivalent for the team. */
export const describeSlot = (date: string, time: string, timeZone: string) => {
	const [year, month, day] = date.split('-').map(Number);
	const dateLabel = new Intl.DateTimeFormat('en-US', {
		timeZone: 'UTC',
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	}).format(new Date(Date.UTC(year, month - 1, day)));
	const timeLabel = TIME_SLOTS.find((slot) => slot.value === time)?.label ?? time;
	const local = `${dateLabel} at ${timeLabel} ${zoneLabel(timeZone)}`;
	const withYear = `${dateLabel}, ${year} at ${timeLabel} ${zoneLabel(timeZone)}`;
	if (timeZone === EASTERN) return { local, eastern: `${timeLabel} ET`, full: withYear };
	const utc = zonedTimeToUtc(date, time, timeZone);
	const easternTime = new Intl.DateTimeFormat('en-US', { timeZone: EASTERN, hour: 'numeric', minute: '2-digit' }).format(utc);
	const easternDay = new Intl.DateTimeFormat('en-US', { timeZone: EASTERN, weekday: 'long' }).format(utc);
	const sameDay = easternDay === dateLabel.split(',')[0];
	const eastern = `${sameDay ? '' : `${easternDay} `}${easternTime} ET`;
	return { local, eastern, full: `${withYear} (${eastern})` };
};

/* One-click "Add to Google Calendar" link for the team: a 30-minute event at the chosen slot. */
export const googleCalendarLink = (date: string, time: string, timeZone: string, title: string, details: string) => {
	const start = zonedTimeToUtc(date, time, timeZone);
	const stamp = (ms: number) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
	const params = new URLSearchParams({
		action: 'TEMPLATE',
		text: title,
		dates: `${stamp(start)}/${stamp(start + 30 * 60000)}`,
		details,
		ctz: timeZone,
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
