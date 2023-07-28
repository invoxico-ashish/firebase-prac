import React, { useState } from "react";
import { useFirebase } from "../Context/Firebase";

function ContextSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  console.log(firebase, "firebase");
  return (
    <div className="App">
      <h1>Firebase Sing in BY making function in useContext</h1>
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
      <button
        onClick={() => {
          firebase.signUpUserWithEmailAndPassword(email, password);
          firebase.putData("users/" + "ashish", { email, password });
        }}
      >
        Click here
      </button>
    </div>
  );
}

export default ContextSignin;
