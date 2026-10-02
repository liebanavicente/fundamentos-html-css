"use client";

import type { Icon } from "@phosphor-icons/react";
import {
  Article,
  BracketsAngle,
  Cards,
  DeviceMobile,
  DownloadSimple,
  Layout,
  ListChecks,
  Palette,
  Rows,
  Textbox,
} from "@phosphor-icons/react";
import { useEffect, useState, useSyncExternalStore } from "react";

// *Asterisks* mark the key words, set in the display serif.
const FEATURES: Array<{ label: string; Icon: Icon }> = [
  { label: "escribir tu *primera página* web", Icon: BracketsAngle },
  { label: "ordenar textos, *enlaces e imágenes*", Icon: Article },
  { label: "crear *formularios* de verdad", Icon: Textbox },
  { label: "dar *color y estilo* a todo", Icon: Palette },
  { label: "entender el *modelo de caja*", Icon: Rows },
  { label: "colocar cosas con *Flexbox y Grid*", Icon: Layout },
  { label: "adaptar tu web al *móvil*", Icon: DeviceMobile },
  { label: "practicar con *ejercicios* y pistas", Icon: ListChecks },
  { label: "repasar con *tarjetas inteligentes*", Icon: Cards },
  { label: "*descargar* lo que construyes", Icon: DownloadSimple },
];

type Letter = { char: string; key: boolean };

/** Splits a label into letters, remembering which belong to a *key word*. */
function lettersOf(label: string): Letter[] {
  const letters: Letter[] = [];
  let key = false;
  for (const char of label) {
    if (char === "*") key = !key;
    else letters.push({ char, key });
  }
  return letters;
}

const plainLabel = (label: string) => label.replace(/\*/g, "");

// Typewriter timing: letters appear one by one, the phrase holds, then is erased letter by letter.
const TYPE_MS = 75;
const ERASE_MS = 34;
const HOLD_MS = 2800;
const GAP_MS = 450;

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Types one feature at a time letter by letter, holds it, erases it and moves on to the next. */
export function FeatureRotator() {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");
  const [paused, setPaused] = useState(false);

  const letters = lettersOf(FEATURES[index].label);
  const length = letters.length;

  useEffect(() => {
    if (paused || reduceMotion) return;
    let delay: number;
    let step: () => void;
    if (phase === "typing") {
      delay = count === 0 ? GAP_MS : TYPE_MS;
      step = () => (count + 1 >= length ? (setCount(length), setPhase("holding")) : setCount(count + 1));
    } else if (phase === "holding") {
      delay = HOLD_MS;
      step = () => setPhase("erasing");
    } else {
      delay = ERASE_MS;
      step = () => {
        if (count > 0) return setCount(count - 1);
        setIndex((index + 1) % FEATURES.length);
        setPhase("typing");
      };
    }
    const timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [count, phase, index, length, paused, reduceMotion]);

  function show(next: number) {
    setIndex(next);
    setCount(0);
    setPhase("typing");
  }

  const everything = (
    <ul className="rotator-list">
      {FEATURES.map(({ label: item, Icon }) => (
        <li key={item}>
          <Icon aria-hidden size={20} weight="bold" />
          {plainLabel(item).charAt(0).toUpperCase() + plainLabel(item).slice(1)}
        </li>
      ))}
    </ul>
  );

  if (reduceMotion) {
    return (
      <div className="rotator is-static">
        <p className="rotator-lead">En este curso aprenderás a:</p>
        {everything}
      </div>
    );
  }

  const { Icon } = FEATURES[index];
  return (
    <div
      className="rotator"
      onBlur={() => setPaused(false)}
      // Pause for keyboard users only: a mouse click on a dot should jump there and keep typing.
      onFocus={(event) => event.target.matches(":focus-visible") && setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="rotator-lead">En este curso aprenderás a</p>
      {/* Screen readers get the whole list once instead of text that keeps being typed. */}
      <div className="visually-hidden">{everything}</div>
      <p aria-hidden className="rotator-stage">
        <span className="rotator-phrase">
          <Icon className="rotator-icon" key={index} size={30} weight="bold" />
          <span className="rotator-text">
            {letters.slice(0, count).map(({ char, key }, position) => (
              // Keyed by position so only the newest letter animates in.
              <span className={`rotator-letter${key ? " is-key" : ""}`} key={position}>
                {char}
              </span>
            ))}
            <span className={`rotator-caret${phase === "holding" || paused ? " is-blinking" : ""}`} />
          </span>
        </span>
      </p>
      <div className="rotator-dots" role="group" aria-label="Lo que aprenderás">
        {FEATURES.map(({ label: item }, dot) => (
          <button aria-current={dot === index} aria-label={plainLabel(item)} className={dot === index ? "is-active" : undefined} key={item} onClick={() => show(dot)} type="button">
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
