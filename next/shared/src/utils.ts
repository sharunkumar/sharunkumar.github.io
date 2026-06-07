import { work } from "./cv";

export function getYear(date?: string): string {
  if (!date) return "Present";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return String(parsed.getUTCFullYear());
}

export function dateRange(startDate: string, endDate?: string): string {
  const start = getYear(startDate);
  const end = endDate ? getYear(endDate) : "Present";
  return start === end ? start : `${start} \u2013 ${end}`;
}

export function monthYear(date?: string): string {
  if (!date) return "Present";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

export function totalExperienceYears(): number {
  const starts = work
    .map((entry) => new Date(entry.startDate).getTime())
    .filter((time) => !Number.isNaN(time));
  if (starts.length === 0) return 0;
  const earliest = Math.min(...starts);
  const years = (Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}

export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
