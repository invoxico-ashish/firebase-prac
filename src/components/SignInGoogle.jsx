import React, { Fragment, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

function SignInGoogle() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singupWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };

  return (
    <div className="App">
      <h1> Firevbase Sign in using google ACC</h1>
      <label>Email</label>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        placeholder="Pasword"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={singupWithGoogle}> Sign in with google</button>
    </div>
  );
}

export default SignInGoogle;
