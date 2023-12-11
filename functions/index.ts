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

export const updateProfile = functions.https.onCall(async (data, context) => {
  // Mettre à jour le profil utilisateur dans Firestore
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called while authenticated.",
    );
  }
  const uid = context.auth.uid;
  return admin
    .firestore()
    .collection("profiles")
    .doc(uid)
    .update(data)
    .then(() => {
      return { message: "Profile updated successfully" };
    })
    .catch((error) => {
      throw new functions.https.HttpsError("internal", error);
    });
});
