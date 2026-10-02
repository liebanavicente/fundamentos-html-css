"use client";

import Link from "next/link";
import { BookOpenText, Brain, Code, House, List, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { type CSSProperties, type KeyboardEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links: Array<{ href: string; label: string; Icon: typeof House; also?: string[] }> = [
  { href: "/", label: "Inicio", Icon: House },
  { href: "/lecciones", label: "Lecciones", Icon: BookOpenText },
  { href: "/practica", label: "Práctica", Icon: Code },
  { href: "/repaso", label: "Repasar", Icon: Brain, also: ["/glosario", "/chuleta"] },
];

const isActive = (href: string, pathname: string, also: string[] = []) =>
  href === "/" ? pathname === href : [href, ...also].some((path) => pathname.startsWith(path));

export function Navigation() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // The menu belongs to the page it was opened on, so navigating closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === pathname;

  /** Slides the coral block under a link; without a target it rests on the current page. */
  const moveIndicator = useCallback((target?: HTMLElement | null) => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;
    const link = target ?? list.querySelector<HTMLElement>('a[aria-current="page"]');
    if (!link) {
      indicator.style.opacity = "0";
      return;
    }
    indicator.style.opacity = "1";
    indicator.style.setProperty("--x", `${link.offsetLeft}px`);
    indicator.style.setProperty("--w", `${link.offsetWidth}px`);
  }, []);

  useLayoutEffect(() => {
    moveIndicator();
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => moveIndicator());
    observer.observe(list);
    return () => observer.disconnect();
  }, [pathname, moveIndicator]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add("menu-open");
    document.querySelector<HTMLElement>("#mobile-menu a")?.focus();
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function closeMenu() {
    setOpenOn(null);
    menuButtonRef.current?.focus();
  }

  function onMenuKey(event: KeyboardEvent) {
    if (event.key === "Escape") closeMenu();
  }

  return (
    <>
      <nav aria-label="Principal" className="site-nav">
        <div className="nav-track" onMouseLeave={() => moveIndicator()}>
          <span aria-hidden className="nav-indicator" ref={indicatorRef} />
          <ul ref={listRef}>
          {links.map(({ href, label, Icon, also }) => (
            <li key={href}>
              <Link
                aria-current={isActive(href, pathname, also) ? "page" : undefined}
                href={href}
                onBlur={() => moveIndicator()}
                onFocus={(event) => moveIndicator(event.currentTarget)}
                onMouseEnter={(event) => moveIndicator(event.currentTarget)}
              >
                <Icon aria-hidden size={18} weight="bold" />
                <span className="nav-label">{label}</span>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </nav>

      <button
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        className="menu-toggle"
        onClick={() => (menuOpen ? closeMenu() : setOpenOn(pathname))}
        ref={menuButtonRef}
        type="button"
      >
        {menuOpen ? <X aria-hidden size={20} weight="bold" /> : <List aria-hidden size={20} weight="bold" />}
        {menuOpen ? "Cerrar" : "Menú"}
      </button>

      {menuOpen
        ? // The header's backdrop blur would trap a fixed panel inside it, so the menu lives in <body>.
          createPortal(
            <div aria-label="Menú" aria-modal="true" className="mobile-menu" id="mobile-menu" onKeyDown={onMenuKey} role="dialog">
              <ul>
                {links.map(({ href, label, Icon, also }, index) => (
                  <li key={href} style={{ "--i": index } as CSSProperties}>
                    <Link aria-current={isActive(href, pathname, also) ? "page" : undefined} href={href} onClick={() => setOpenOn(null)}>
                      <Icon aria-hidden size={26} weight="bold" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
