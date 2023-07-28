import React from "react";
import { useFirebase } from "./Context/Firebase";
// import SignUpUser from "./Pages/SignUpUser";
// import SigninUser from "./Pages/SigninUser";

function App() {
  const firebase = useFirebase();
  console.log(firebase, "firebase");

  return (
    <div className="App">
      {/* <SignUpUser /> */}
      {/* <SigninUser /> */}
    </div>
  );
}

export default App;
