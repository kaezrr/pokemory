function Card({ data }) {
  return (
    <div className="card">
      <img src={data.img} alt={data.name} />
      <h2>{data.name}</h2>
    </div>
  );
}

export default Card;
