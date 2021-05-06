import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
              onSubmit={handleFormSubmit}
            >
              <p className="text-white font-medium text-center text-lg font-bold">
                SIGN UP
              </p>
              <div className="form-group mt-2">
                <label htmlFor="username" className="block text-sm text-white">
                  Username:
                </label>
                <input
                  className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  placeholder="Username goes here..."
                  name="username"
                  type="text"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email ">Email address:</label>
                <input
                  className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  placeholder="Email goes here..."
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="pwd">Password:</label>
                <input
                  className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  placeholder="Password goes here..."
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              >
                Submit
              </button>
            </form>
            <a
              className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
              href="#"
            >
              create an account
            </a>
            <p className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400">
              <Link to="/login">Go to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
