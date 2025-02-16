function TitleScore({ data }) {
  return (
    <div className="header">
      <h1>Pokemory</h1>
      <p>Get points by clicking an image but don't click any more than once!</p>
      <h3>
        Score: {data.score}
        <br />
        High Score: {data.maxScore}
      </h3>
    </div>
  );
}

export default TitleScore;
