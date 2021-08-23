import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCxBpiKR9P_B-fWtTGma4cjrprsp-Bvkcw",
    authDomain: "chat-app-f944d.firebaseapp.com",
    projectId: "chat-app-f944d",
    storageBucket: "chat-app-f944d.appspot.com",
    messagingSenderId: "102109227361",
    appId: "1:102109227361:web:a0bf0e039309b5a776fd20"
}).auth();
