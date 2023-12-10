import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createProfile = functions.auth.user().onCreate((user) => {
  // Créer un profil utilisateur dans Firestore
  return admin.firestore().collection("profiles").doc(user.uid).set({
    avatar: "",
    email: user.email,
    username: user.displayName,
    isSubscribed: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
});
