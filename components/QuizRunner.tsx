"use client";

import { InlineText } from "./InlineText";
import { useState } from "react";
import { ArrowClockwise, ArrowRight, Cards, CheckCircle, Exam, XCircle } from "@phosphor-icons/react";

import type { Quiz } from "../lib/lessons";
import { type CardStates, dueCards, gradeCard, nextReview } from "../lib/study-progress";
import { useCardStates, useScore } from "../lib/use-study-progress";

const dateFormatter = new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long" });

function TestMode({ quiz, slug }: { quiz: Quiz; slug: string }) {
  const [, saveScore] = useScore(slug);
  const [order, setOrder] = useState(() => quiz.questions.map((_, index) => index));
  const [position, setPosition] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [failed, setFailed] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[order[position]];

  function choose(option: number) {
    if (chosen !== null) return;
    setChosen(option);
    if (option !== question.correct) setFailed((current) => [...current, order[position]]);
  }

  function next() {
    if (position + 1 < order.length) {
      setPosition(position + 1);
      setChosen(null);
      return;
    }
    setFinished(true);
    // Only a full run counts towards the score; repeating the misses is practice.
    if (order.length === quiz.questions.length) {
      const right = order.length - failed.length;
      saveScore({ best: right, last: right, total: order.length, at: new Date().toISOString() });
    }
  }

  function restart(indices: number[]) {
    setOrder(indices);
    setPosition(0);
    setChosen(null);
    setFailed([]);
    setFinished(false);
  }

  if (finished) {
    const right = order.length - failed.length;
    return (
      <div className="quiz-result">
        <p className="quiz-score">
          {right}/{order.length}
        </p>
        <h2>{right === order.length ? "¡Perfecto!" : right >= order.length * 0.7 ? "¡Muy bien!" : "Sigue repasando"}</h2>
        {failed.length ? (
          <>
            <p className="muted">Estas son las que fallaste:</p>
            <ul className="quiz-missed">
              {failed.map((index) => (
                <li key={index}>
                  <strong>
                    <InlineText text={quiz.questions[index].question} />
                  </strong>
                  <span>
                    <InlineText text={quiz.questions[index].options[quiz.questions[index].correct]} />
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <div className="quiz-actions">
          {failed.length ? (
            <button className="button primary" onClick={() => restart(failed)} type="button">
              <ArrowClockwise aria-hidden size={18} weight="bold" /> Repetir las falladas
            </button>
          ) : null}
          <button className="button" onClick={() => restart(quiz.questions.map((_, index) => index))} type="button">
            Repetir el test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-question" key={`${order[position]}-${position}`}>
      <div className="quiz-progress" aria-hidden>
        <span style={{ width: `${(position / order.length) * 100}%` }} />
      </div>
      <p className="muted">
        Pregunta {position + 1} de {order.length}
      </p>
      <h2>
        <InlineText text={question.question} />
      </h2>
      <div className="quiz-options" role="group" aria-label="Respuestas">
        {question.options.map((option, index) => {
          const state =
            chosen === null ? "" : index === question.correct ? "is-correct" : index === chosen ? "is-wrong" : "is-dim";
          return (
            <button className={`quiz-option ${state}`} disabled={chosen !== null} key={index} onClick={() => choose(index)} type="button">
              <span className="quiz-letter">{String.fromCharCode(65 + index)}</span>
              <span>
                <InlineText text={option} />
              </span>
              {state === "is-correct" ? <CheckCircle aria-label="Correcta" size={22} weight="fill" /> : null}
              {state === "is-wrong" ? <XCircle aria-label="Incorrecta" size={22} weight="fill" /> : null}
            </button>
          );
        })}
      </div>
      {chosen !== null ? (
        <div className={`quiz-feedback ${chosen === question.correct ? "right" : "wrong"}`} role="status">
          <strong>{chosen === question.correct ? "¡Correcto!" : "No es esa."}</strong>
          <p>
            <InlineText text={question.explanation} />
          </p>
          <button className="button primary" onClick={next} type="button">
            {position + 1 < order.length ? "Siguiente" : "Ver resultado"} <ArrowRight aria-hidden size={18} weight="bold" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

function CardMode({ quiz, slug }: { quiz: Quiz; slug: string }) {
  const [states, saveStates] = useCardStates(slug);
  const [queue, setQueue] = useState<Quiz["cards"] | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  const due = dueCards(quiz.cards, states);
  const upcoming = nextReview(quiz.cards, states);

  function start() {
    setQueue(dueCards(quiz.cards, states));
    setReviewed(0);
    setFlipped(false);
  }

  function grade(knew: boolean) {
    if (!queue?.length) return;
    const [card, ...rest] = queue;
    const next: CardStates = { ...states, [card.id]: gradeCard(states[card.id], knew) };
    saveStates(next);
    // A missed card comes back at the end of this session.
    setQueue(knew ? rest : [...rest, card]);
    setReviewed((count) => count + 1);
    setFlipped(false);
  }

  if (!queue) {
    return (
      <div className="cards-intro">
        <p className="quiz-score">{due.length}</p>
        <h2>{due.length === 1 ? "tarjeta para repasar hoy" : "tarjetas para repasar hoy"}</h2>
        <p className="muted">
          Cada tarjeta que aciertas vuelve más tarde (1, 3, 7 y 16 días); las que fallas, enseguida. Tu progreso se
          guarda en este navegador.
        </p>
        {due.length ? (
          <button className="button primary" onClick={start} type="button">
            Empezar
          </button>
        ) : (
          <p className="notice">¡Al día! {upcoming ? `Próximo repaso: ${dateFormatter.format(new Date(upcoming))}.` : null}</p>
        )}
      </div>
    );
  }

  if (!queue.length) {
    return (
      <div className="cards-intro">
        <p className="quiz-score">{reviewed}</p>
        <h2>repasos hechos</h2>
        <p className="muted">
          {nextReview(quiz.cards, states)
            ? `Vuelve el ${dateFormatter.format(new Date(nextReview(quiz.cards, states)!))} para el siguiente repaso.`
            : "Buen trabajo."}
        </p>
        <button className="button" onClick={() => setQueue(null)} type="button">
          Terminar
        </button>
      </div>
    );
  }

  const card = queue[0];
  return (
    <div className="flashcard-stage">
      <p className="muted">Quedan {queue.length}</p>
      <button
        aria-label={flipped ? "Ver la pregunta" : "Ver la respuesta"}
        className={`flashcard${flipped ? " is-flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        type="button"
      >
        <span className="flashcard-face flashcard-front">
          <InlineText text={card.front} />
          <small>Toca para ver la respuesta</small>
        </span>
        <span className="flashcard-face flashcard-back">
          <InlineText text={card.back} />
        </span>
      </button>
      <div className="quiz-actions">
        <button className="button" disabled={!flipped} onClick={() => grade(false)} type="button">
          No lo sabía
        </button>
        <button className="button primary" disabled={!flipped} onClick={() => grade(true)} type="button">
          Lo sabía
        </button>
      </div>
    </div>
  );
}

export function QuizRunner({ slug, quiz, only }: { slug: string; quiz: Quiz; only?: "test" }) {
  const [mode, setMode] = useState<"test" | "cards">("test");
  const hasCards = quiz.cards.length > 0 && only !== "test";

  if (!quiz.questions.length && !hasCards) return null;

  return (
    <div className="quiz">
      {hasCards && quiz.questions.length ? (
        <div className="doubt-tabs quiz-tabs" role="tablist">
          <button aria-selected={mode === "test"} onClick={() => setMode("test")} role="tab" type="button">
            <Exam aria-hidden size={18} weight="bold" /> Test ({quiz.questions.length})
          </button>
          <button aria-selected={mode === "cards"} onClick={() => setMode("cards")} role="tab" type="button">
            <Cards aria-hidden size={18} weight="bold" /> Tarjetas ({quiz.cards.length})
          </button>
        </div>
      ) : null}
      <div className="quiz-panel">
        {mode === "test" && quiz.questions.length ? <TestMode quiz={quiz} slug={slug} /> : <CardMode quiz={quiz} slug={slug} />}
      </div>
    </div>
  );
}
