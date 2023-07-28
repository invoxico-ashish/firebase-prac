import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);

function SigninUser() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Success"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Signin Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter email"
        name="email"
        type="email"
        value={email}
      />
      <label htmlFor="">Pasword</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        name="password"
        type="password"
        value={password}
      />
      <button onClick={SignIn}>Sign IN</button>
    </div>
  );
}

export default SigninUser;
