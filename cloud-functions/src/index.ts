import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

interface UserProfile {
	avatar: string;
	email: string | undefined;
	username: string | undefined;
	isSubscribed: boolean;
	createdAt: FirebaseFirestore.FieldValue;
}

export const createProfile = functions.auth.user().onCreate((user) => {
	const newUserProfile: UserProfile = {
		avatar: "",
		email: user.email,
		username: user.displayName,
		isSubscribed: false,
		createdAt: admin.firestore.FieldValue.serverTimestamp(),
	};

	return admin
		.firestore()
		.collection("users")
		.doc(user.uid)
		.set(newUserProfile);
});
