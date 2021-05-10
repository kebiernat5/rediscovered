import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Card from "../components/Card";
import { useStoreContext } from "../utils/GlobalState";
import { useParams } from "react-router-dom";

function Practice() {
  // {props.employees.map(({ picture, name, phone, email, dob, id }) => {
  //   return (
  //     <Card
  //       key={id.value}
  //       image={picture.thumbnail}
  //       firstName={name.first}
  //       lastName={name.last}
  //       phone={phone}
  //       email={email}
  //       date={dob.date.slice(0, -14)}
  //     />
  //   );
  // })}
  let { id } = useParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [state, dispatch] = useStoreContext();

//   const burrito = {
//   id: state.imageArray.id,
//   photoUrl: state.imageArray.photoUrl,
//   caption: state.imageArray.caption
// }


useEffect(() => {
  API.getUser(user.id).then((res) => {
    setUsername(res.data.username);
    setEmail(res.data.email);
  });

    //API call to find all of our photos, saves the response to global state
    API.getImage(id).then((res) => {
      dispatch({
        type: "SetImages",
        payload: res.data,
      });
    });
  }, [user]);
  console.log(state);

  // Passed in global state as a prop.
  return (
    <>
      {/* {{state.map(({ photoUrl, username, caption }) => { */}
        {/* return ( */}
          <Card
            // key={id}
            // image={photoUrl}
            // username={username}
            // caption={caption}
          />
        {/* ); */}
      {/* })}} */}
    </>
  );
}

export default Practice;
