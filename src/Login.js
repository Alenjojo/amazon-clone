import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { HistoryRounded } from "@material-ui/icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>
      </div>

      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={signIn} className="login_signInButton">
          Sign In
        </button>
      </form>
      <p>Here by, you agree to signing in FAKE amazon-clone app😁</p>
      <button onClick={register} className="login_registerButton">
        Create an Account
      </button>
    </div>
  );
}

export default Login;
