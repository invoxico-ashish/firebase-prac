import React, { useContext } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyC059L98hHazvb4c8YvwSqGqmJRrlUZkRY",
  authDomain: "test-app-2061b.firebaseapp.com",
  projectId: "test-app-2061b",
  storageBucket: "test-app-2061b.appspot.com",
  messagingSenderId: "224992743915",
  appId: "1:224992743915:web:f14e7625ba29e46911c9ae",
  databaseURL: "https://test-app-2061b-default-rtdb.firebaseio.com/",
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const Database = getDatabase(FirebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };
  const putData = (key, data) => set(ref(Database, key), data);
  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
