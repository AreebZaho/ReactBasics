import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1 className="text-4xl bg-pink-300">Welcome: {user}</h1>
    </div>
  );
};

export default Profile;
