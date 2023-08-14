import React, { useState, useEffect } from "react";
import ContextSignin from "./components/ContextSignin";
import SignInGoogle from "./components/SignInGoogle";
import FileStore from "./components/FileStore";
import PutDataRealtimeDb from "./components/PutDataRealtimeDb";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Logged In");
        setUser(user);
      } else {
        console.log("User is logged out");
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <>
        {/* <ContextSignin /> */}
        {/* <SignInGoogle /> */}
        {/* <FileStore /> */}
        <PutDataRealtimeDb />
      </>
    );
  }
  return (
    <>
      <div className="App">
        <h1>Hello {user.email} you are logged in</h1>
        <button onClick={() => signOut(auth)}> Logout</button>
      </div>
    </>
  );
}

export default App;
