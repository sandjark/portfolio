import type { ReactNode } from "react";

/**
 * Project bodies are authored as plain prose (see `content/projects/*.md`) and
 * rendered without a Markdown parser, so external references used to appear as
 * dead text: `... can be seen here (https://example.com).`
 *
 * This turns both bare URLs and explicit `[label](url)` Markdown links into real
 * anchors. It deliberately avoids adding a Markdown dependency — prose is
 * rendered as plain text everywhere else on the site, and this keeps that
 * rendering path predictable.
 */
const linkClassName =
  "text-accent underline underline-offset-2 break-all hover:text-heading transition-colors";

/**
 * Trailing sentence punctuation and prose-supplied closing brackets belong to
 * the surrounding sentence, not to the URL. For `(https://example.com).` we want
 * to link `https://example.com`, not `https://example.com).`.
 */
function splitTrailingPunctuation(raw: string): [string, string] {
  let end = raw.length;

  while (end > 0 && ".,;:!?".includes(raw[end - 1])) end--;

  for (;;) {
    const closer = raw[end - 1];
    const opener =
      closer === ")" ? "(" : closer === "]" ? "[" : closer === "}" ? "{" : "";

    if (!opener) break;

    const prefix = raw.slice(0, end);
    const opened = prefix.split(opener).length - 1;
    const closed = prefix.split(closer).length - 1;

    // Only drop the bracket when it has no matching opener inside the URL.
    if (closed <= opened) break;
    end--;
  }

  return [raw.slice(0, end), raw.slice(end)];
}

export default function Linkify({ text }: { text: string }) {
  // Built per render so concurrent renders can't share `lastIndex` state.
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>"']+)/g;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const [, label, markdownUrl, bareUrl] = match;

    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    if (markdownUrl) {
      nodes.push(
        <a
          key={`markdown-${match.index}`}
          href={markdownUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {label}
        </a>
      );
    } else {
      const [url, trailing] = splitTrailingPunctuation(bareUrl);

      nodes.push(
        <a
          key={`url-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {url}
        </a>
      );

      if (trailing) nodes.push(trailing);
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <>{nodes}</>;
}
