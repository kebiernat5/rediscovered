import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import CreateQuestions from "./pages/CreateQuestions";
import Navbar from "./components/Navbar";
import Upload from "./pages/Upload";
import GetOnlinePost from "./components/OnlinePost/GetOnlinePost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/api-test">
              <GetOnlinePost />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/practice">
              <Practice />
            </ProtectedRoute>
            <ProtectedRoute exact path="/createQuestions">
              <CreateQuestions />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
