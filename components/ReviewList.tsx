"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

import { useCardStates, useScore } from "../lib/use-study-progress";

type LessonOption = { slug: string; number: string; title: string };

function ReviewRow({ item }: { item: LessonOption }) {
  const [states] = useCardStates(item.slug);
  const [score] = useScore(item.slug);
  const seen = Object.values(states);
  const due = seen.filter((state) => new Date(state.due) <= new Date()).length;
  const started = seen.length > 0 || score !== null;

  return (
    <li>
      <Link className="review-row" href={`/repaso/${item.slug}`}>
        <span className="review-date">{item.number}</span>
        <strong>{item.title}</strong>
        <span className="review-status">
          {!started ? <span className="badge">Sin empezar</span> : null}
          {score ? (
            <span className="badge">
              Test {score.last}/{score.total}
            </span>
          ) : null}
          {due ? <span className="badge pending">{due} por repasar</span> : started && seen.length ? <span className="badge">Al día</span> : null}
        </span>
        <ArrowUpRight aria-hidden className="review-arrow" size={18} weight="bold" />
      </Link>
    </li>
  );
}

export function ReviewList({ lessons }: { lessons: LessonOption[] }) {
  return (
    <ol className="review-list">
      {lessons.map((item) => (
        <ReviewRow item={item} key={item.slug} />
      ))}
    </ol>
  );
}
