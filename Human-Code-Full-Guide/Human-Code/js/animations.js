/* Small motion utilities */

function revealElement(element) {
  if (!element) return;
  element.classList.add("reveal", "visible");
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
