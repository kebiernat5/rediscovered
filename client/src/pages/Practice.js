import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Card from "../components/Card";
import { useStoreContext } from "../utils/GlobalState";

function Practice() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });

    //API call to find all of our photos, saves the response to global state
    API.getImage().then(
      (res) => 
      {
        dispatch({
          type: "SetImages",
          payload: res.data,
        })
      }
    );
  }, [user]);

  // Passed in global state as a prop.
  return <Card props={state} />;
}

export default Practice;
