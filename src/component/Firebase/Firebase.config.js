import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1-WbUR9byieYMYli_B2GYjed9yqnC-f8",
  authDomain: "programmers-web.firebaseapp.com",
  projectId: "programmers-web",
  storageBucket: "programmers-web.appspot.com",
  messagingSenderId: "989006994830",
  appId: "1:989006994830:web:15081ad7441e479a0918df"
};

const app = initializeApp(firebaseConfig);
export default app;