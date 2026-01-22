function getSolvedProblems(submissions) {
  const solved = new Set();
  submissions.forEach((sub) => {
    if (sub.verdict === "OK") {
      solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
    }
  });
  return solved;
}

function getWeakTags(submissions) {
  const tagCount = {};
  submissions.forEach((sub) => {
    if (sub.verdict === "OK") {
      sub.problem.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    }
  });

  return Object.entries(tagCount)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map((t) => t[0]);
}

function recommendProblems(problems, solvedSet, weakTags, rating) {
  let minRating, maxRating;

  // Beginner-friendly ranges
  if (rating < 800) {
    minRating = 800;
    maxRating = 1000;
  } else {
    minRating = rating - 200;
    maxRating = rating + 200;
  }

  // First pass: strict tag match
  let recommendations = problems.filter(p => {
    if (!p.rating) return false;

    const pid = `${p.contestId}-${p.index}`;

    return (
      !solvedSet.has(pid) &&
      p.rating >= minRating &&
      p.rating <= maxRating &&
      p.tags.some(tag => weakTags.includes(tag))
    );
  });

  // 🔥 Fallback: ignore tags if nothing found
  if (recommendations.length === 0) {
    recommendations = problems.filter(p => {
      if (!p.rating) return false;

      const pid = `${p.contestId}-${p.index}`;

      return (
        !solvedSet.has(pid) &&
        p.rating >= minRating &&
        p.rating <= maxRating
      );
    });
  }

  return recommendations.slice(0, 20);
}

module.exports = {
  getSolvedProblems,
  getWeakTags,
  recommendProblems,
};
