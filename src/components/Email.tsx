import { emailType } from "../types/globalTypes";
import "./Email.css";
interface Props {
  email: emailType;
}

const Email = ({ email }: Props) => {
  return (
    <div className="email-container">
      <img src={email.avatar}/>
      <span className="email-name">{email.name}</span>
      <span className="email-des">{email.des}</span>
      <span className="email-date">{email.date}</span>
    </div>
  );
};

export default Email;
