import { useState } from "react";
import { getRecommendations } from "./services/api";
import RecommendationList from "./components/RecommendationList";

function App() {
  const [handle, setHandle] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getRecommendations(handle);
    setData(res);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Codeforces Problem Recommender</h1>

      <input
        placeholder="Enter Codeforces handle"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />
      <button onClick={fetchData}>Get Recommendations</button>

      {data && <RecommendationList data={data} />}
    </div>
  );
}

export default App;
