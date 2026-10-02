import Link from "next/link";
import { Books, Exam, ListMagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const TABS = [
  { href: "/repaso", label: "Repaso", Icon: Exam },
  { href: "/glosario", label: "Glosario", Icon: Books },
  { href: "/chuleta", label: "Chuleta", Icon: ListMagnifyingGlass },
];

/** Sub-navigation shared by the study pages. */
export function StudyTabs({ current }: { current: "/repaso" | "/glosario" | "/chuleta" }) {
  return (
    <nav aria-label="Estudiar" className="study-tabs doubt-tabs">
      {TABS.map(({ href, label, Icon }) => (
        <Link aria-current={href === current ? "page" : undefined} href={href} key={href}>
          <Icon aria-hidden size={18} weight="bold" />
          {label}
        </Link>
      ))}
    </nav>
  );
}
