import { cardType } from "../types/globalTypes";
import Card from "./Card";
import "./Cards.css";

const cardArray: cardType[] = [
  { title: "$143.223", des: "Your bank balance", icon:  "/public/wallet-2.svg" },
  { title: "$43.110", des: "Your Tax", icon:  "/public/chart.svg" },
  { title: "24", des: "Employees working today", icon:  "/public/empty-wallet-add.svg" },
  { title: "$3.287", des: "this weeks card spending", icon:  "/public/card-receive.svg" },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardArray.map((card, index) => (
        <Card key={index} card={card}/>
      ))}
    </div>
  );
};

export default Cards;
