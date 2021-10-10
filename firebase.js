import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHz-zFD0JJXpYg8nIjoBda45Hwcuq00iU",
    authDomain: "signal-app-clone-ytb-build.firebaseapp.com",
    projectId: "signal-app-clone-ytb-build",
    storageBucket: "signal-app-clone-ytb-build.appspot.com",
    messagingSenderId: "1034070843242",
    appId: "1:1034070843242:web:a9701f6b0979cbc1f50f13",
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };