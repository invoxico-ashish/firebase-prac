import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "../Firebase";

const firestore = getFirestore(app);
function FileStore() {
  //  FUNCTION TO ADD DATA IN EXISTING COLLECTION
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "mohali",
      pinCode: 123,
      lat: 321,
      long: 852,
    });
    console.log("result", result);
  };

  // FUNCTION TO MAKE A NEW COLLECTION & ADD DATA IN NEW COLLECTION
  const makeSecCollection = async () => {
    await addDoc(collection(firestore, "cities/OzR1bhKnCJaZ31OlD57K/places"), {
      name: "this is the place name",
      desc: "this is description",
      date: Date.now(),
    });
  };

  // FUNCTION TO READ OR GET THE DATA FROM DATABASE
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "OzR1bhKnCJaZ31OlD57K");
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  // FUNCTION FOR QUERY
  const getDocumentbyQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  return (
    <>
      <div className="container">
        <button onClick={writeData}>Put data</button>
        <button onClick={makeSecCollection}>Put again in new collection</button>
        <button onClick={getDocument}>Get document</button>
        <button onClick={getDocumentbyQuery}>Get document by query</button>
      </div>
    </>
  );
}

export default FileStore;
