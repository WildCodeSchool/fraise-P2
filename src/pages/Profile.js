import React from "react";
import profile from "../images/profile.png";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="container-home">
      <img className="profile" src={profile} alt="" />
      <div className="personals"> Personals informations</div>
      <div className="personals"> Preferred products</div>
      <div className="personals"> Need Help?</div>
    </main>
  );
};

export default Profile;
