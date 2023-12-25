import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/services/firebase/firebase.config";

export async function checkIfSnippetsExist(): Promise<boolean> {
	try {
		const snippetsCollection = collection(db, "snippets");
		const querySnapshot = await getDocs(query(snippetsCollection));
		return !querySnapshot.empty;
	} catch (error) {
		console.error(
			"Erreur lors de la vérification de l'existence des snippets:",
			error,
		);
		return false;
	}
}
