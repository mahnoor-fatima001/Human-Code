/* Theme preference hook for future light-theme support */

const HumanCodeTheme = {
  get() {
    return localStorage.getItem("humanCodeTheme") || "dark";
  },

  set(theme) {
    localStorage.setItem("humanCodeTheme", theme);
    document.documentElement.dataset.theme = theme;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dataset.theme = HumanCodeTheme.get();
});
