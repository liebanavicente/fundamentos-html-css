import type { Element } from "hast";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { CodeBlock } from "../components/CodeBlock";
import { Playground } from "../components/Playground";
import { ReviewCheckbox } from "../components/ReviewCheckbox";
import { remarkCallouts, remarkPlayground } from "./markdown-plugins";

type MarkdownRendererProps = {
  content: string;
  /** Identifies this text so each reader's ticked review items survive a reload. */
  storageKey?: string;
};

function languageOf(node: Element | undefined) {
  const code = node?.children.find((child): child is Element => child.type === "element" && child.tagName === "code");
  const classes = code?.properties.className;
  const language = Array.isArray(classes) ? classes.map(String).find((name) => name.startsWith("language-")) : undefined;
  return language?.slice("language-".length) ?? null;
}

/** The live editor a ```playground block becomes (see remarkPlayground), or null for ordinary code. */
function playgroundOf(node: Element | undefined) {
  const mount = node?.children.find((child): child is Element => child.type === "element" && child.tagName === "div");
  const classes = mount?.properties.className;
  if (!mount || !Array.isArray(classes) || !classes.includes("playground-mount")) return null;
  const { dataHtml, dataCss, dataTitle } = mount.properties;
  return <Playground css={String(dataCss ?? "")} html={String(dataHtml ?? "")} title={String(dataTitle ?? "") || undefined} />;
}

export function MarkdownRenderer({ content, storageKey }: MarkdownRendererProps) {
  // GFM checkboxes carry no source position; a render is deterministic, so their order identifies them.
  let checkbox = 0;
  return (
    <article className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkCallouts, remarkPlayground]}
        rehypePlugins={[rehypeSlug, [rehypeHighlight, { detect: false }]]}
        components={{
          a: ({ href, children }) => (
            <a href={href} rel="noreferrer noopener" target={href?.startsWith("http") ? "_blank" : undefined}>
              {children}
            </a>
          ),
          pre: ({ node, children }) => playgroundOf(node) ?? <CodeBlock language={languageOf(node)}>{children}</CodeBlock>,
          table: ({ children }) => (
            <div className="table-scroll">
              <table>{children}</table>
            </div>
          ),
          input: ({ node: _node, ...props }) =>
            props.type === "checkbox" && storageKey ? (
              <ReviewCheckbox initial={Boolean(props.checked)} storageKey={`${storageKey}:${checkbox++}`} />
            ) : (
              <input {...props} />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
