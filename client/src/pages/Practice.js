import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Practice() {
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
      <h1>On the Practice page!</h1>
      <button type="button" className="btn btn-primary">Saved Easy</button>
      <button type="button" className="btn btn-success">Random</button> 
      <button type="button" className="btn btn-warning">Saved Hard</button> 
      <container>
        <p>Questions test goes here</p>
        <button>save Easy</button>
        <button>save Hard</button>
      </container>
    </div>
  );
}

export default Practice;