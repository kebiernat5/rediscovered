import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Practice", to: "/practice" });
    links.push({ text: "CreateQuestions", to: "createQuestions" });
    links.push({ text: "Profile", to: "/profile" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  return (
    <div className="flex min-h-3/4">
      <nav className="navbar navbar-expand navbar-dark bg-primary flex flex-wrap justify-between w-screen h-20 text-white bg-black md:flex-nowrap">
        <p class="text-2xl text-">Rediscovered</p>
        <div className="container">
          <button class="z-30 flex items-center justify-end flex-grow pr-3 bg-black focus:outline-none md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div class="flex flex-col items-stretch w-screen text-xl text-center transform bg-black md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-3">
            {/* <a
              href="#"
              class="h-10 leading-10 border-b-2 border-dotted md:border-none"
            >
              Home
            </a>
            <a
              href="#"
              class="h-10 leading-10 border-b-2 border-dotted md:border-none"
            >
              About
            </a> */}
            {/* <a
              href="#"
              class="h-10 leading-10 border-b-2 border-dotted md:border-none"
            >
              Service
            </a>
            <a
              href="#"
              class="h-10 leading-10 border-b-2 border-dotted md:border-none md:bg-red-600 md:rounded-full md:w-24"
            >
              Log In
            </a>
            <a
              href="#"
              class="h-10 leading-10 border-b-2 border-dotted md:border-red-600 md:border-solid md:border-2 md:rounded-full md:w-24 md:leading-9"
            >
              Sign Up
            </a> */}
            <Link className="navbar-brand" to="/">
            </Link>
            <NavLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
