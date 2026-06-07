import { useCallback, useEffect, useRef, useState } from "react";
import { applyFlavor, flavors, isFlavor } from "@/themes";

type LineKind = "cmd" | "out" | "err" | "ok";
interface Line {
  kind: LineKind;
  text: string;
}

const HELP = [
  "commands",
  "  help              show this list",
  "  theme <flavor>    switch catppuccin flavour",
  "  flavors           list available flavours",
  "  date              current date and time",
  "  clear             clear the screen",
];

const PROMPT_USER = "visitor@sharun";

export function Console() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "ok", text: "catppuccin shell — try `help` or `theme latte`" },
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
      if (input.length === 0) {
        setLines((prev) => [...prev, { kind: "cmd", text: "" }]);
        return;
      }
      const echo: Line = { kind: "cmd", text: input };
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
      if (cmd === "flavors") {
        print([
          echo,
          { kind: "out", text: flavors.map((flavor) => flavor.id).join("  ") },
        ]);
        return;
      }
      if (cmd === "theme") {
        if (arg && isFlavor(arg)) {
          applyFlavor(arg);
          print([echo, { kind: "ok", text: `flavour → ${arg}` }]);
        } else {
          print([
            echo,
            {
              kind: "err",
              text: `usage: theme <${flavors.map((f) => f.id).join("|")}>`,
            },
          ]);
        }
        return;
      }
      if (cmd === "date") {
        print([echo, { kind: "out", text: new Date().toString() }]);
        return;
      }
      if (cmd === "sudo") {
        print([
          echo,
          { kind: "err", text: "permission denied — but I admire the confidence." },
        ]);
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
              ? "text-accent"
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
          className="flex-1 border-none bg-transparent text-term caret-accent outline-none"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}

export default Console;
