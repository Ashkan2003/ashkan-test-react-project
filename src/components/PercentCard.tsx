import "./PercentCard.css";

interface Props {
  percentCard: {
    title: string;
    count: number;
    badge: string;
    badgeType: "primary" | "secondary";
  };
}

const PercentCard = ({ percentCard }: Props) => {
  return (
    <div className="percentCard">
      <h3>{percentCard.title}</h3>
      <p>{percentCard.count}</p>
      <div className={`percentCard-badge ${percentCard.badgeType ==="primary"? "primary":"secondary"}`}>{percentCard.badge}</div>
    </div>
  );
};

export default PercentCard;
