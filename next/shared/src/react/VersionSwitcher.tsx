import { useCallback, useEffect, useRef, useState } from "react";
import { versions } from "../versions";

interface VersionSwitcherProps {
  current: string;
}

const WRAP: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  bottom: "18px",
  transform: "translateX(-50%)",
  zIndex: 2147483000,
  fontFamily:
    "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
  pointerEvents: "none",
};

const BAR: React.CSSProperties = {
  pointerEvents: "auto",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px",
  borderRadius: "999px",
  background: "rgba(10, 10, 12, 0.72)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(14px) saturate(160%)",
  WebkitBackdropFilter: "blur(14px) saturate(160%)",
  boxShadow: "0 12px 40px -12px rgba(0, 0, 0, 0.7)",
};

const LABEL: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.4)",
  padding: "0 8px 0 10px",
  userSelect: "none",
};

const HINT: React.CSSProperties = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.32)",
  padding: "0 8px 0 4px",
  userSelect: "none",
  whiteSpace: "nowrap",
};

function linkStyle(active: boolean, accent: string): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: active ? 700 : 500,
    color: active ? "#06060a" : "rgba(255, 255, 255, 0.74)",
    background: active ? accent : "transparent",
    border: active
      ? `1px solid ${accent}`
      : "1px solid rgba(255, 255, 255, 0.10)",
    padding: "7px 13px",
    borderRadius: "999px",
    transition: "background 160ms ease, color 160ms ease, border-color 160ms ease",
  };
}

function numStyle(active: boolean): React.CSSProperties {
  return {
    fontSize: "10px",
    fontWeight: 700,
    opacity: active ? 0.7 : 0.45,
  };
}

export function VersionSwitcher({ current }: VersionSwitcherProps) {
  const [open, setOpen] = useState(true);
  const currentRef = useRef(current);
  currentRef.current = current;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const index = Number(event.key);
      if (!Number.isInteger(index) || index < 1 || index > versions.length) {
        return;
      }
      const next = versions[index - 1];
      if (next.id !== currentRef.current) window.location.href = next.url;
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = useCallback(() => setOpen((value) => !value), []);

  if (!open) {
    return (
      <div style={WRAP}>
        <button type="button" onClick={toggle} style={{ ...BAR, cursor: "pointer", color: "#fff", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "10px 16px" }}>
          ▴ versions
        </button>
      </div>
    );
  }

  return (
    <div style={WRAP}>
      <div style={BAR}>
        <span style={LABEL}>4 takes</span>
        {versions.map((version) => {
          const active = version.id === current;
          return (
            <a
              key={version.id}
              href={active ? undefined : version.url}
              style={linkStyle(active, version.accent)}
              title={version.tagline}
              aria-current={active ? "page" : undefined}
            >
              <span style={numStyle(active)}>{String(version.index).padStart(2, "0")}</span>
              {version.name}
            </a>
          );
        })}
        <span style={HINT}>press 1–4</span>
        <button type="button" onClick={toggle} aria-label="Hide switcher" style={{ pointerEvents: "auto", cursor: "pointer", background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "14px", padding: "0 8px" }}>
          ×
        </button>
      </div>
    </div>
  );
}

export default VersionSwitcher;
