const { initializeApp } = require("firebase/app");
const { getDatabase, serverTimestamp } = require("firebase/database");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "souzaoke.firebaseapp.com",
  projectId: "souzaoke",
  storageBucket: "souzaoke.appspot.com",
  messagingSenderId: "224292458894",
  appId: "1:224292458894:web:36a46de7fef52c63ec94df",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const getTimestamp = function () {
  return serverTimestamp();
};

module.exports = {
  db,
  getTimestamp,
};
