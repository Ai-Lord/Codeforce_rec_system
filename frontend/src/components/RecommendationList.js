function RecommendationList({ data }) {
  return (
    <div>
      <h2>User: {data.handle}</h2>
      <p>Rating: {data.rating}</p>
      <p>Weak Tags: {data.weakTags.join(", ")}</p>

      <ul>
        {data.recommendations.map((p) => (
          <li key={`${p.contestId}${p.index}`}>
            <a
              href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
              target="_blank"
              rel="noreferrer"
            >
              {p.name}
            </a>{" "}
            | Rating: {p.rating} | Tags: {p.tags.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
