"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = ["AI products", "agent workflows", "shipping systems", "internet-native tools"];

export function TypingLine() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrase = phrases[index % phrases.length];

  useEffect(() => {
    const delay = isDeleting ? 32 : 58;
    const hold = length === phrase.length && !isDeleting ? 1200 : delay;

    const timer = window.setTimeout(() => {
      if (!isDeleting && length < phrase.length) {
        setLength((v) => v + 1);
        return;
      }
      if (!isDeleting && length === phrase.length) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && length > 0) {
        setLength((v) => v - 1);
        return;
      }
      setIsDeleting(false);
      setIndex((v) => v + 1);
    }, hold);

    return () => window.clearTimeout(timer);
  }, [index, isDeleting, length, phrase]);

  const rendered = useMemo(() => phrase.slice(0, length), [length, phrase]);

  return (
    <span className="inline-flex max-w-full min-w-0 items-center whitespace-normal break-words gradient-text glow-text sm:min-w-[23ch] sm:whitespace-nowrap">
      <span>{rendered || "\u00A0"}</span>
      <span
        className="ml-1 inline-block h-[0.8em] w-[3px] shrink-0 animate-pulse rounded-sm bg-orange"
        aria-hidden
      />
    </span>
  );
}
