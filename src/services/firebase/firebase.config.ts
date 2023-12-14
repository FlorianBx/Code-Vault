// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import admin from "firebase-admin";

async function initFirebaseAdmin() {
	if (process.env.FIREBASE_TYPE) {
		try {
			const serviceAccount = {
				type: process.env.FIREBASE_TYPE,
				project_id: process.env.FIREBASE_PROJECT_ID,
				private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
				private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
				client_email: process.env.FIREBASE_CLIENT_EMAIL,
				client_id: process.env.FIREBASE_CLIENT_ID,
				auth_uri: process.env.FIREBASE_AUTH_URI,
				token_uri: process.env.FIREBASE_TOKEN_URI,
				auth_provider_x509_cert_url:
					process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
				client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
			};
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount),
			});
		} catch (error) {
			console.error("Failed to initialize Firebase Admin:", error);
		}
	}
}

await initFirebaseAdmin();

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
if (process.env.NODE_ENV !== "test") {
	getAnalytics(app);
}

export const db = getFirestore(app);
export const auth = getAuth(app);
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
	connectAuthEmulator(auth, "http://localhost:9099");
}
export default app;
