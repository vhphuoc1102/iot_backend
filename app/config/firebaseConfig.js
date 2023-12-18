var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyABWiJxzu-LBZNMNzPLuZWtad9X7Tg25bQ",
  authDomain: "iotungdung.firebaseapp.com",
  databaseURL:
    "https://iotungdung-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotungdung",
  storageBucket: "iotungdung.appspot.com",
  messagingSenderId: "328775980313",
  appId: "1:328775980313:web:0dffe06070094bca2ca188",
  measurementId: "G-CEC2CNGXWQ",
};

var MyFirebase = firebase.initializeApp(firebaseConfig);

module.exports = MyFirebase;
