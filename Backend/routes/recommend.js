const express = require("express");
const router = express.Router();

const {
  fetchUserInfo,
  fetchUserSubmissions,
  fetchProblemset,
} = require("../services/codeforces");

const {
  getSolvedProblems,
  getWeakTags,
  recommendProblems,
} = require("../utils/recommender");

router.get("/:handle", async (req, res) => {
  try {
    const handle = req.params.handle;

    const user = await fetchUserInfo(handle);
    const submissions = await fetchUserSubmissions(handle);
    const problems = await fetchProblemset();

    const solved = getSolvedProblems(submissions);
    const weakTags = getWeakTags(submissions);
    const rating = user.rating || 1200;

    const recommendations = recommendProblems(
      problems,
      solved,
      weakTags,
      rating
    );

    res.json({
      handle,
      rating,
      weakTags,
      recommendations,
    });
  } catch (err) {
    res.status(500).json({ error: "Invalid handle or API error" });
  }
});

module.exports = router;
