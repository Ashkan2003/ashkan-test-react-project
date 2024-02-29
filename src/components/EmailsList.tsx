import { emailType } from "../types/globalTypes";
import Email from "./Email";
import "./EmailsList.css"
// this is a simple data-base for emails list
const emailListArray: emailType[] = [
  {
    avatar: "",
    name: "Livia Stanton",
    des: "Meeting scheduled",
    date: "12:14 PM",
  },
  {
    avatar: "",
    name: "Allison Lipshutz",
    des: "Update on marketing campaign",
    date: "Des 19 at 8:01 PM",
  },
  {
    avatar: "",
    name: "Martin Stanton",
    des: "Designly 2.0 is about to launch",
    date: "Des 19 at 6:11 PM",
  },
  {
    avatar: "",
    name: "Alfredo Botosh",
    des: "My friend Julie loves Dapper!",
    date: "Des 19 at 6:11 PM",
  },
  {
    avatar: "",
    name: "Ann Philips",
    des: "My friend Julie loves Dapper!",
    date: "Des 19 at 7:11 PM",
  },
  {
    avatar: "",
    name: "Allison Lipshuts",
    des: "Update on marketing",
    date: "Des 19 at 8:01 PM",
  },
];

const EmailsList = () => {
  return (
    <div className="emailsList-container">
      <h2>Emails</h2>
      <div className="email-list">
        {emailListArray.map((email, index) => (
          // map through the eamil-list
          <Email key={index} email={email} />
        ))}
      </div>
    </div>
  );
};

export default EmailsList;
