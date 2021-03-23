import firebase from "firebase/app";
import "firebase/database";
import { switchStatus } from "../Utils/utils";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //Some issue with nextjs firebase requiring url in string
  databaseURL: "https://codestation-cp-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();

export const saveData = (questionLink) => {
  db.ref("problems")
    .push()
    .set({
      questionLink,
      date: new Date().toString(),
      sumit: {
        status: "yetToAttempt",
        updatedAt: new Date().toString(),
      },
      yash: {
        status: "yetToAttempt",
        updatedAt: new Date().toString(),
      },
      atharva: {
        status: "yetToAttempt",
        updatedAt: new Date().toString(),
      },
    });
};

export const fetchData = () => {
  var result = [];
  db.ref("problems").on("value", (snapshot) => {
    snapshot.forEach((childSnapShot) => {
      const data = childSnapShot.val();
      result.push({ ...data, id: childSnapShot.key });
    });
  });
  // console.log(result)
  return result;
};

export const updateData = (id, status, name) => {
  // console.log(id, status);
  switchStatus();
  db.ref(`problems/${id}`).update({
    [name]: {
      status: switchStatus(status),
    },
  });
};

export const deleteData = (id) => {
  db.ref(`problems/${id}`).remove()
}
