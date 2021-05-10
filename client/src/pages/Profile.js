import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import InstaProfile from "../components/InstaProfile";
import { useStoreContext } from "../utils/GlobalState";
import Grid from "../components/Grid"
// import Card from "../components/Card"


function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [state, dispatch] = useStoreContext();
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <>
        <InstaProfile  />
      {state.imageArray.map(({ photoUrl }) => {
        return (
          <Grid
          // key={id}
          image={photoUrl}
          />

        );
      })}
    </>
  );
}

export default Profile;
