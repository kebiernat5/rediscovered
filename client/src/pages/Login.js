import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch((err) => {
        alert(err.response.data.message);
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
                LOGIN
              </p>
              {/* <form onSubmit={handleFormSubmit}> */}
              <div className="form-group">
                <label htmlFor="email" className="block text-sm text-white">
                  Email address:
                </label>
                <input
                  className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  placeholder="Email goes here..."
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="pwd" className="block  text-sm text-white">
                  Password:
                </label>
                <input
                  className="form-control form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  placeholder="Password goes here..."
                  name="password"
                  type="password"
                  id="pwd"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <div className="mt-4 items-center flex justify-between">
                <button
                  type="submit"
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                >
                  Submit
                </button>
                <a
                  className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                  href="#"
                >
                  create an account
                </a>
                <p className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400">
                  <Link to="/signup">Go to Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
