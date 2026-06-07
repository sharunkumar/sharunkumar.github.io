import { useCallback, useEffect, useRef, useState } from "react";
import { basics } from "@next/shared/cv";
import { socials, email } from "@next/shared/socials";

type LineKind = "cmd" | "out" | "err" | "ok";
interface Line {
  kind: LineKind;
  text: string;
}

const SECTIONS: Record<string, string> = {
  about: "s-about",
  experience: "s-experience",
  work: "s-experience",
  projects: "s-projects",
  skills: "s-skills",
  stack: "s-skills",
  education: "s-education",
  contact: "s-contact",
  social: "s-contact",
};

const HELP = [
  "available commands",
  "  help                 show this list",
  "  ls                   list sections",
  "  whoami               identity",
  "  about | experience   jump to a section",
  "  projects | skills    jump to a section",
  "  education | contact  jump to a section",
  "  social               print social links",
  "  open <network>       open a profile (e.g. open github)",
  "  email                start an email",
  "  theme <amber|green|ice>  recolor the phosphor",
  "  clear                wipe the screen",
];

const PROMPT_USER = "visitor@sharun";

export function Console() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "ok", text: "session ready — type `help`, `projects`, or `theme green`" },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useRef<string[]>([]);
  const histIndex = useRef<number>(-1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [lines]);

  const print = useCallback((next: Line[]) => {
    setLines((prev) => [...prev, ...next]);
  }, []);

  const run = useCallback(
    (raw: string) => {
      const input = raw.trim();
      const echo: Line = { kind: "cmd", text: input };
      if (input.length === 0) {
        setLines((prev) => [...prev, { kind: "cmd", text: "" }]);
        return;
      }
      history.current.push(input);
      histIndex.current = history.current.length;

      const [cmd, ...rest] = input.toLowerCase().split(/\s+/);
      const arg = rest[0];

      if (cmd === "clear") {
        setLines([]);
        return;
      }
      if (cmd === "help") {
        print([echo, ...HELP.map((text) => ({ kind: "out" as const, text }))]);
        return;
      }
      if (cmd === "ls") {
        print([echo, { kind: "out", text: Object.keys(SECTIONS).join("  ") }]);
        return;
      }
      if (cmd === "whoami") {
        print([
          echo,
          { kind: "out", text: `${basics.name} — ${basics.label}` },
          { kind: "out", text: `${basics.location.city}, ${basics.location.region}` },
        ]);
        return;
      }
      if (cmd === "social") {
        print([
          echo,
          ...socials.map((social) => ({
            kind: "out" as const,
            text: `${social.network.padEnd(11)} ${social.url}`,
          })),
        ]);
        return;
      }
      if (cmd === "email") {
        print([echo, { kind: "ok", text: `opening mail to ${email}` }]);
        window.location.href = `mailto:${email}`;
        return;
      }
      if (cmd === "open") {
        const match = socials.find((s) => s.network.toLowerCase() === arg);
        if (match) {
          print([echo, { kind: "ok", text: `opening ${match.url}` }]);
          window.open(match.url, "_blank", "noopener,noreferrer");
        } else {
          print([echo, { kind: "err", text: `no profile named '${arg ?? ""}'` }]);
        }
        return;
      }
      if (cmd === "theme") {
        if (arg === "amber" || arg === "green" || arg === "ice") {
          document.documentElement.setAttribute("data-crt", arg);
          print([echo, { kind: "ok", text: `phosphor set to ${arg}` }]);
        } else {
          print([echo, { kind: "err", text: "usage: theme <amber|green|ice>" }]);
        }
        return;
      }
      if (cmd === "sudo") {
        print([echo, { kind: "err", text: "permission denied — but I admire the confidence." }]);
        return;
      }
      if (cmd === "date") {
        print([echo, { kind: "out", text: new Date().toString() }]);
        return;
      }
      if (cmd in SECTIONS) {
        const id = SECTIONS[cmd];
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        print([echo, { kind: "ok", text: `→ ${cmd}` }]);
        return;
      }
      print([echo, { kind: "err", text: `command not found: ${cmd} — try 'help'` }]);
    },
    [print],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        run(value);
        setValue("");
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (history.current.length === 0) return;
        histIndex.current = Math.max(0, histIndex.current - 1);
        setValue(history.current[histIndex.current] ?? "");
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (history.current.length === 0) return;
        histIndex.current = Math.min(history.current.length, histIndex.current + 1);
        setValue(history.current[histIndex.current] ?? "");
      }
    },
    [run, value],
  );

  const focusInput = useCallback(() => inputRef.current?.focus(), []);

  return (
    <div onClick={focusInput} className="cursor-text">
      {lines.map((line, index) => {
        if (line.kind === "cmd") {
          return (
            <div key={index} className="whitespace-pre-wrap break-words">
              <span className="text-prompt">{PROMPT_USER}</span>
              <span className="text-term-dim">:~$</span>{" "}
              <span className="text-term">{line.text}</span>
            </div>
          );
        }
        const tone =
          line.kind === "err"
            ? "text-error"
            : line.kind === "ok"
              ? "text-phosphor"
              : "text-term-dim";
        return (
          <div key={index} className={`whitespace-pre-wrap break-words ${tone}`}>
            {line.text}
          </div>
        );
      })}

      <div className="flex items-center">
        <span className="text-prompt">{PROMPT_USER}</span>
        <span className="text-term-dim">:~$</span>
        <span className="px-1.5">&nbsp;</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="terminal input"
          className="flex-1 border-none bg-transparent text-term caret-phosphor outline-none"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}

export default Console;
