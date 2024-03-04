import { voidFunc } from "../types/globalTypes";
import "./Button.css";

interface Props {
  text: string;
  type: "primary" | "secondary";
  handleClick: voidFunc;
}

const Button = ({ type, handleClick, text }: Props) => {
  if (type === "primary") {
    return (
      <button onClick={handleClick} className="custom-primary-btn">
        {text}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button onClick={handleClick} className="custom-secondary-btn">
        {text}
      </button>
    );
  }
};

export default Button;
