import axios from "axios";

export const getRecommendations = async (handle) => {
  const res = await axios.get(
    `http://localhost:5000/api/recommendations/${handle}`
  );
  return res.data;
};
