/* Lesson utilities */

const HumanCodeLessons = {
  complete(id) {
    const completed = JSON.parse(localStorage.getItem("humanCodeCompletedLessons") || "[]");
    if (!completed.includes(id)) completed.push(id);
    localStorage.setItem("humanCodeCompletedLessons", JSON.stringify(completed));
  },

  isComplete(id) {
    const completed = JSON.parse(localStorage.getItem("humanCodeCompletedLessons") || "[]");
    return completed.includes(id);
  },

  reset() {
    localStorage.removeItem("humanCodeCompletedLessons");
  }
};
