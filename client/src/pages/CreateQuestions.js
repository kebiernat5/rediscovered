import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function CreateQuestions() {
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
    <div className="container Profile">
      <h1>On the CreateQuestions page!</h1>
      <Link to="/practice"><button type="button" className="btn btn-primary">Practice</button></Link> 
      <Link to="/createQuestions"><button type="button" className="btn btn-secondary">Create new Question</button> </Link> 
      <Link to="/">Go home</Link>
    </div>
  );
}

export default CreateQuestions;