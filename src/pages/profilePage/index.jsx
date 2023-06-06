import Header from "../../component/header";
import "./style.css";
import blank from "../../assets/blank_pic.png";

const Profile = () => {
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <>
      <Header />
      <div className="profile">
        <div className="prof-box">
          <div className="prof-img">
            <img src={blank} alt="" />
          </div>
          <div className="flex-username">
            <div className="flex">
              <h6>Username</h6>
              <p>{username}</p>
            </div>
            <div className="flex">
              <h6>Email</h6>
              <p>{email}</p>
            </div>
          </div>
          <div className="prof-button">
            <button type="submit" className="btn-edit">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
