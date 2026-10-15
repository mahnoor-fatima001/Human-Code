/* Lightweight static quiz state */

function saveQuizScore(courseId, score) {
  const scores = JSON.parse(localStorage.getItem("humanCodeQuizScores") || "{}");
  scores[courseId] = score;
  localStorage.setItem("humanCodeQuizScores", JSON.stringify(scores));
}

function getQuizScore(courseId) {
  const scores = JSON.parse(localStorage.getItem("humanCodeQuizScores") || "{}");
  return scores[courseId] ?? null;
}
