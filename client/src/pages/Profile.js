import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import InstaProfile from "../components/InstaProfile"
// import Card from "../components/Card"


function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <>
    <InstaProfile />
    {/* <div className="container Profile">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
  Button
</button> */}


      {/* <h1>On the notecards page!</h1>
      <Link to="/practice"><button type="button" className="btn btn-primary">Practice</button></Link> 
      <Link to="/createQuestions"><button type="button" className="btn btn-secondary">Create new Question</button> </Link> 
      <Link to="/">Go home</Link>
    </div> */}
      </>
  );
}

export default Profile;
