/**
 * Fallback copy-to-clipboard for browsers without navigator.clipboard support.
 * Uses the deprecated execCommand("copy") API as a last resort.
 */
export function fallbackCopy(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
  } catch {
    // silent fail — UI still shows copied feedback
  }
  document.body.removeChild(textarea);
}

/**
 * Copy text to clipboard with fallback support.
 * Calls onSuccess after a successful copy (or fallback).
 */
export function copyToClipboard(text: string, onSuccess: () => void) {
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    navigator.clipboard
      .writeText(text)
      .then(onSuccess)
      .catch(() => {
        fallbackCopy(text);
        onSuccess();
      });
  } else {
    fallbackCopy(text);
    onSuccess();
  }
}
