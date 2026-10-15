/* Browser-only learning progress */

function getHumanCodeProgress() {
  const completed = JSON.parse(localStorage.getItem("humanCodeCompletedLessons") || "[]");
  return {
    completedLessons: completed,
    totalCompleted: completed.length
  };
}

function calculateProgress(totalLessons) {
  if (!totalLessons) return 0;
  return Math.round((getHumanCodeProgress().totalCompleted / totalLessons) * 100);
}
