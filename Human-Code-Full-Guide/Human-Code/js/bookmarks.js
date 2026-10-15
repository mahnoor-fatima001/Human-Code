const HumanCodeBookmarks = {
  get() {
    return JSON.parse(localStorage.getItem("humanCodeBookmarks") || "[]");
  },

  add(bookmark) {
    const list = this.get();
    if (!list.some(item => item.id === bookmark.id)) list.push(bookmark);
    localStorage.setItem("humanCodeBookmarks", JSON.stringify(list));
  },

  remove(id) {
    const list = this.get().filter(item => item.id !== id);
    localStorage.setItem("humanCodeBookmarks", JSON.stringify(list));
  },

  clear() {
    localStorage.removeItem("humanCodeBookmarks");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#bookmark-list");
  if (!container) return;

  const bookmarks = HumanCodeBookmarks.get();
  if (!bookmarks.length) return;

  container.innerHTML = bookmarks.map(item => `
    <article class="resource-card">
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description || "")}</p>
      <a href="${encodeURI(item.url)}">Open lesson</a>
    </article>
  `).join("");
});

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
