import PercentCard from "./PercentCard";
import "./PercentCardsAndSimpleLine.css";

const percentCardsArray: {
  title: string;
  count: number;
  badge: string;
  badgeType: "primary" | "secondary";
}[] = [
  { title: "New Clients", count: 54, badge: "+18.7%", badgeType: "primary" },
  {
    title: "invoice overdue",
    count: 6,
    badge: "-2.7%",
    badgeType: "secondary",
  },
];

const PercentCardsAndSimpleLine = () => {
  return (
    <div className="grid-container">
      {/* percent-card */}
      <div className="percent-cards">
        {percentCardsArray.map((percentCard, index) => (
          <PercentCard key={index} percentCard={percentCard} />
        ))}
      </div>
      {/* chart */}
      <div>ddd</div>
    </div>
  );
};

export default PercentCardsAndSimpleLine;
