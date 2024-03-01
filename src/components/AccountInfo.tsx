import "./AccountInfo.css";
const AccountInfo = () => {
  return (
    <div className="account-info-container">
      {/* the top icons of the account-info */}
      <div className="account-info-icons">
        <img className="icon" src="/public/accountInfo-imgs/calendar.svg" />
        <img className="icon" src="/public/accountInfo-imgs/notification-bing.svg" />
        <img className="icon" src="/public/accountInfo-imgs/message-notif.svg" />
        <img id="avatar" src="/public/accountInfo-imgs/avatar-1.jpg" />
        <img id="arrow-down-icon" src="/public/accountInfo-imgs/arrow-down.svg" />
      </div>
      {/* the status part of account-info */}
      <div className="status-container">
        {/* the text-box */}
        <div className="first-text-box">
          <p>Formation status</p>
          <p>In progress</p>
        </div>
        {/* the progress-bar */}
        <div className="progressbar-container"> 
          <div className="progressbar"></div> 
        </div> 
        {/* the second text-box */}
        <div className="second-text-box">
          <p>Estimated processing</p>
          <p>4-5 business days</p>
        </div>
        {/* the view btn */}
        <button className="view-btn">View status</button>
      </div>
    </div>
  );
};

export default AccountInfo;
