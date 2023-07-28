import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC059L98hHazvb4c8YvwSqGqmJRrlUZkRY",
    authDomain: "test-app-2061b.firebaseapp.com",
    projectId: "test-app-2061b",
    storageBucket: "test-app-2061b.appspot.com",
    messagingSenderId: "224992743915",
    appId: "1:224992743915:web:f14e7625ba29e46911c9ae",
    databaseURL: "https://test-app-2061b-default-rtdb.firebaseio.com/",
  };

  export const app = initializeApp(firebaseConfig)