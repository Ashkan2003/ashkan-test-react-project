import "./Card.css";

interface Props {
  card: { title: string; des: string; icon: string };
}

const Card = ({ card }: Props) => {
  return (
    <div className="card">
      <img src={card.icon} alt="icon-cart" />
      <h1>{card.title}</h1>
      <h6>{card.des}</h6>
    </div>
  );
};

export default Card;
