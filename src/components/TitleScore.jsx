function TitleScore({ data }) {
  return (
    <div className="header">
      <h1>Pokemory</h1>
      <h3>Score: {data.score}</h3>
      <h3>High Score: {data.maxScore}</h3>
    </div>
  );
}

export default TitleScore;
