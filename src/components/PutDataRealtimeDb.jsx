import React, { useState } from "react";
import { useFirebase } from "../Context/Firebase";
function PutDataRealtimeDb() {
  const fireBase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Firebase", fireBase);

  const putNewData = () => {
    fireBase.putData("grandfather/father/child", {
      id: 1,
      name: "ashish",
      age: 22,
    });
  };
  return (
    <>
      <div className="app">
        <h1>put data and see real-time changes in web</h1>
        <p>
          if we change the data in real time database the changes will shwo
          onscreens
        </p>

        <input
          type="email"  
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={putNewData}>Click here </button>
      </div>
    </>
  );
}

export default PutDataRealtimeDb;
