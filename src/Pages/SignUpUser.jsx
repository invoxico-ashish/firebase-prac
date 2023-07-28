import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app)

function SignUpUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
   console.log(value)
    );
  };

  return (
    <div className="signup-page">
      <label> Email</label>
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label> password</label>
      <input
        type="password"
        required
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={CreateUser}>Sign up</button>
    </div>
  );
}

export default SignUpUser;
