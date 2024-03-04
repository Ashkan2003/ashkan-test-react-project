import { personType } from "../types/globalTypes";
import "./Badge.css";

interface Props {
  item: personType;
}

const Badge = ({ item }: Props) => {
  return (
    <div className="badge">
      <img className="avatar" src={item.icon} alt="person-avatar" />
      <span>{item.name}</span>
      <img className="close-icon" src="/modal-imgs/close.svg" alt="" />
    </div>
  );
};

export default Badge;
