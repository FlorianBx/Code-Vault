// Import the functions you need from the SDKs you need
import { Auth, getAuth } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (process.env.NODE_ENV === "test") {
  // Création de mocks pour les tests
  // Notez que ces initialisations sont des exemples; vous devrez les adapter en fonction de vos besoins de test.
  app = {} as FirebaseApp; // Mock de l'app Firebase, cast en tant que FirebaseApp
  db = {} as Firestore; // Mock de Firestore, cast en tant que Firestore
  auth = {} as Auth; // Mock de Auth, cast en tant que Auth
} else {
  // Initialisation normale
  app = initializeApp(firebaseConfig);
  getAnalytics(app);

  db = getFirestore(app);
  auth = getAuth(app);
}

export { app, db, auth };
