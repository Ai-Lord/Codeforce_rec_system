import { useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import RecommendationList from "./components/RecommendationList";
import { getRecommendations } from "./services/api";
import "./styles/theme.css";
import "./styles/app.css";

function App() {
  const [handle, setHandle] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await getRecommendations(handle);
    setData(res);
    setLoading(false);
  };

  return (
    <div>
      <Header />

      <div style={{ padding: "20px" }}>
        <input
          placeholder="Codeforces handle"
          value={handle}
          onChange={e => setHandle(e.target.value)}
        />
        <button onClick={fetchData}>Recommend</button>
      </div>

      {loading && <Loader />}
      {data && !loading && <RecommendationList data={data} />}
    </div>
  );
}

export default App;
