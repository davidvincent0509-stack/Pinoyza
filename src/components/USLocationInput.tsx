"use client";

import { useEffect, useId, useRef, useState } from "react";
import { clsx } from "clsx";

type USLocationInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  className?: string;
};

export function USLocationInput({
  value,
  onChange,
  onBlur,
  error,
  placeholder = "City, State",
  className,
}: USLocationInputProps) {
  const listId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (value.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/locations?q=${encodeURIComponent(value.trim())}`,
          { signal: controller.signal }
        );
        const data = (await res.json()) as string[];
        setSuggestions(data);
        setOpen(data.length > 0);
        setActiveIndex(-1);
      } catch {
        if (!controller.signal.aborted) {
          setSuggestions([]);
          setOpen(false);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectSuggestion(suggestion: string) {
    onChange(suggestion);
    setOpen(false);
    setActiveIndex(-1);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        role="combobox"
        value={value}
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls={listId}
        aria-expanded={open}
        placeholder={placeholder}
        className={clsx(className, error && "border-red-300 focus:border-red-400 focus:ring-red-200")}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        onBlur={() => {
          window.setTimeout(() => {
            onBlur?.();
          }, 120);
        }}
        onKeyDown={(event) => {
          if (!open || suggestions.length === 0) return;

          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex((prev) =>
              prev < suggestions.length - 1 ? prev + 1 : 0
            );
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((prev) =>
              prev > 0 ? prev - 1 : suggestions.length - 1
            );
          }

          if (event.key === "Enter" && activeIndex >= 0) {
            event.preventDefault();
            selectSuggestion(suggestions[activeIndex]);
          }

          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
      />

      {open && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-border bg-white py-1 shadow-lg"
        >
          {suggestions.map((suggestion, index) => (
            <li key={suggestion} role="option" aria-selected={index === activeIndex}>
              <button
                type="button"
                className={clsx(
                  "flex w-full px-4 py-2.5 text-left text-sm text-navy transition-colors hover:bg-surface",
                  index === activeIndex && "bg-primary-light text-primary"
                )}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectSuggestion(suggestion)}
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}

      {loading && value.trim().length >= 2 && (
        <p className="mt-1 text-xs text-muted">Searching US locations…</p>
      )}
    </div>
  );
}
