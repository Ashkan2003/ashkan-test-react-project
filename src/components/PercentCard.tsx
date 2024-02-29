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
      <div className="percentCard-flex-container">
        <p>{percentCard.count}</p>
        <span className={`percentCard-badge ${percentCard.badgeType ==="primary"? "primary":"secondary"}`}>{percentCard.badge}</span>
      </div>
    </div>
  );
};

export default PercentCard;
