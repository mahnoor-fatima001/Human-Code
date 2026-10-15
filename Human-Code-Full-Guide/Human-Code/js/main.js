document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initReveal();
  initGlossarySearch();
  initLessonCompletion();
  updateDashboard();
  initActiveNavigation();
});

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".course-card, .stat-card, .glossary-card, .resource-card, .lesson-row, .content-panel");
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => observer.observe(el));
}

function initGlossarySearch() {
  const input = document.querySelector("#glossary-search");
  if (!input) return;

  const cards = document.querySelectorAll(".glossary-card");
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const match = card.textContent.toLowerCase().includes(query);
      card.style.display = match ? "" : "none";
    });
  });
}

function getCompletedLessons() {
  try {
    return JSON.parse(localStorage.getItem("humanCodeCompletedLessons") || "[]");
  } catch {
    return [];
  }
}

function saveCompletedLessons(list) {
  localStorage.setItem("humanCodeCompletedLessons", JSON.stringify(list));
}

function initLessonCompletion() {
  const buttons = document.querySelectorAll(".lesson-complete");
  if (!buttons.length) return;

  const completed = getCompletedLessons();

  buttons.forEach(button => {
    const id = button.dataset.lesson;
    if (completed.includes(id)) {
      button.classList.add("completed");
      button.textContent = "Completed";
    }

    button.addEventListener("click", () => {
      let current = getCompletedLessons();

      if (current.includes(id)) {
        current = current.filter(item => item !== id);
        button.classList.remove("completed");
        button.textContent = "Mark complete";
      } else {
        current.push(id);
        button.classList.add("completed");
        button.textContent = "Completed";
      }

      saveCompletedLessons([...new Set(current)]);
      updateDashboard();
    });
  });
}

function updateDashboard() {
  const completed = getCompletedLessons();

  const completedCount = document.querySelector("#completed-count");
  if (completedCount) completedCount.textContent = completed.length;

  const bookmarkCount = document.querySelector("#bookmark-count");
  if (bookmarkCount) {
    try {
      const bookmarks = JSON.parse(localStorage.getItem("humanCodeBookmarks") || "[]");
      bookmarkCount.textContent = bookmarks.length;
    } catch {
      bookmarkCount.textContent = "0";
    }
  }
  const quizScore = document.querySelector("#quiz-score");
  if (quizScore) {
    try {
      const scores = Object.values(JSON.parse(localStorage.getItem("humanCodeQuizScores") || "{}"));
      quizScore.textContent = scores.length ? Math.round(scores.reduce((sum, score) => sum + Number(score || 0), 0) / scores.length) + "%" : "—";
    } catch {
      quizScore.textContent = "—";
    }
  }
}

function initActiveNavigation() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.endsWith(current)) link.classList.add("active");
  });
}
