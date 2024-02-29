import { emailType } from "../types/globalTypes";
import "./Email.css"
interface Props {
  email: emailType;
}

const Email = ({ email }: Props) => {
  return <div className="email-container">Email</div>;
};

export default Email;
