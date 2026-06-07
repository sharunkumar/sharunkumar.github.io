export interface Flavor {
  id: string;
  label: string;
}

export const flavors: Flavor[] = [
  { id: "mocha", label: "Mocha" },
  { id: "macchiato", label: "Macchiato" },
  { id: "frappe", label: "Frappé" },
  { id: "latte", label: "Latte" },
];

export const defaultFlavor = "mocha";
export const FLAVOR_KEY = "terminal-flavor";
export const FLAVOR_EVENT = "terminal:flavor";

export function isFlavor(id: string): boolean {
  return flavors.some((flavor) => flavor.id === id);
}

export function currentFlavor(): string {
  if (typeof document === "undefined") return defaultFlavor;
  return document.documentElement.getAttribute("data-theme") || defaultFlavor;
}

export function applyFlavor(id: string): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", id);
  try {
    localStorage.setItem(FLAVOR_KEY, id);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(FLAVOR_EVENT, { detail: id }));
}
