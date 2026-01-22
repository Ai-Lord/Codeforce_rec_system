const axios = require("axios");

const BASE_URL = "https://codeforces.com/api";

async function fetchUserInfo(handle) {
  const res = await axios.get(`${BASE_URL}/user.info`, {
    params: { handles: handle },
  });
  return res.data.result[0];
}

async function fetchUserSubmissions(handle) {
  const res = await axios.get(`${BASE_URL}/user.status`, {
    params: { handle },
  });
  return res.data.result;
}

async function fetchProblemset() {
  const res = await axios.get(`${BASE_URL}/problemset.problems`);
  return res.data.result.problems;
}

module.exports = {
  fetchUserInfo,
  fetchUserSubmissions,
  fetchProblemset,
};
