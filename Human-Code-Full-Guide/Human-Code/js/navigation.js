/* Navigation helpers for Human Code */

function openMobileNavigation() {
  const nav = document.querySelector(".main-nav");
  if (nav) nav.classList.add("open");
}

function closeMobileNavigation() {
  const nav = document.querySelector(".main-nav");
  if (nav) nav.classList.remove("open");
}
