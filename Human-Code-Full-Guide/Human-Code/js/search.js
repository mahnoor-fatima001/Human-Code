/* Shared client-side search helper */

function searchCards(inputSelector, cardSelector) {
  const input = document.querySelector(inputSelector);
  const cards = document.querySelectorAll(cardSelector);
  if (!input || !cards.length) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    cards.forEach(card => {
      card.hidden = query && !card.textContent.toLowerCase().includes(query);
    });
  });
}
