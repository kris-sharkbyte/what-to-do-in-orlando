// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDR10CLEymd4gUm1vRbFIWBKUapcWyhI4g",
  authDomain: "wtdi-orlando.firebaseapp.com",
  projectId: "wtdi-orlando",
  storageBucket: "wtdi-orlando.firebasestorage.app",
  messagingSenderId: "477536377305",
  appId: "1:477536377305:web:b7d3c5d272f6b6fe28e1c8",
  measurementId: "G-MHTX7N5VF2",
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

if (typeof window !== "undefined" && !getApps().length) {
  app = initializeApp(firebaseConfig);
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
