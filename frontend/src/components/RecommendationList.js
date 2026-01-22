const RecommendationList = ({ data }) => {
  return (
    <div className="cards">
      {data.recommendations.map(p => (
        <div className="card" key={`${p.contestId}${p.index}`}>
          <h3>{p.name}</h3>
          <p>Rating: {p.rating}</p>
          <p className="tags">{p.tags.join(", ")}</p>
          <a
            href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
            target="_blank"
            rel="noreferrer"
          >
            Solve →
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
