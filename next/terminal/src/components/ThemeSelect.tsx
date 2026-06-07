import { useEffect, useState } from "react";
import {
  applyFlavor,
  currentFlavor,
  defaultFlavor,
  flavors,
  FLAVOR_EVENT,
} from "@/themes";

export function ThemeSelect() {
  const [value, setValue] = useState(defaultFlavor);

  useEffect(() => {
    setValue(currentFlavor());
    const onChange = (event: Event) => {
      setValue((event as CustomEvent<string>).detail);
    };
    window.addEventListener(FLAVOR_EVENT, onChange);
    return () => window.removeEventListener(FLAVOR_EVENT, onChange);
  }, []);

  return (
    <label className="flex items-center gap-2 text-xs text-term-dim">
      <span className="hidden sm:inline">flavour</span>
      <select
        value={value}
        onChange={(event) => applyFlavor(event.target.value)}
        aria-label="Catppuccin flavour"
        className="cursor-pointer rounded border border-accent/30 bg-crust px-2 py-1 text-xs text-term outline-none focus:border-accent/70"
      >
        {flavors.map((flavor) => (
          <option key={flavor.id} value={flavor.id}>
            {flavor.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ThemeSelect;
