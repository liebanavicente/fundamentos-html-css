/** Renders `code` spans inside short texts (goals, summaries, quiz answers) without a full Markdown pass. */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/g).map((part, index) =>
        part.startsWith("`") && part.endsWith("`") ? <code key={index}>{part.slice(1, -1)}</code> : part,
      )}
    </>
  );
}
