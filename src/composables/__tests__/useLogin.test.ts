import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	UserCredential,
	AuthError,
} from "firebase/auth";
import { useLogin } from "../useLogin";
import { useAuthStore } from "../../stores/authStore";

vi.mock("firebase/auth", async () => {
	const actual = await vi.importActual("firebase/auth");

	return {
		...actual,
		signInWithEmailAndPassword: vi.fn(),
		signInWithPopup: vi.fn(),
		GithubAuthProvider: class {},
	};
});

describe("useLogin", () => {
	let authStore;

	beforeEach(() => {
		setActivePinia(createPinia());
		authStore = useAuthStore();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it.skip("loginWithEmailAndPassword - success", async () => {
		const mockCredential: UserCredential = {
			user: { uid: "123" },
		};
		vi.mocked(signInWithEmailAndPassword).mockResolvedValue(mockCredential);

		const { loginWithEmailAndPassword, error } = useLogin();
		console.log("1 - AuthStore.loggedIn", authStore.isLoggedIn);
		await loginWithEmailAndPassword({
			email: "test@test.com",
			password: "password",
		});
		console.log("2 - AuthStore.loggedIn", authStore.isLoggedIn);

		expect(error.value).toBeNull();
		expect(authStore.isLoggedIn).toBeTruthy();
	});

	it("loginWithEmailAndPassword - failure", async () => {
		const mockError: AuthError = new Error("Auth Error") as AuthError;
		vi.mocked(signInWithEmailAndPassword).mockRejectedValue(mockError);

		const { loginWithEmailAndPassword, error } = useLogin();
		await loginWithEmailAndPassword({
			email: "test@test.com",
			password: "wrongpassword",
		});

		expect(error.value).toBe("Auth Error");
		expect(authStore.isLoggedIn).toBeFalsy();
	});

	it.skip("loginWithGitHub - success", async () => {
		const mockCredential: UserCredential = {
			user: { uid: "github-uid" },
		};
		vi.mocked(signInWithPopup).mockResolvedValue(mockCredential);

		const { loginWithGitHub, error } = useLogin();
		await loginWithGitHub();

		expect(error.value).toBeNull();
		expect(authStore.isLoggedIn).toBeTruthy();
	});

	it("loginWithGitHub - failure", async () => {
		const mockError: AuthError = new Error("GitHub Auth Error") as AuthError;
		vi.mocked(signInWithPopup).mockRejectedValue(mockError);

		const { loginWithGitHub, error } = useLogin();
		await loginWithGitHub();

		expect(error.value).toBe("GitHub Auth Error");
		expect(authStore.isLoggedIn).toBeFalsy();
	});

	it("error is reset on successful login", async () => {
		vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce(
			new Error("Auth Error"),
		);
		const { loginWithEmailAndPassword, error } = useLogin();
		await loginWithEmailAndPassword({
			email: "test@test.com",
			password: "wrongpassword",
		});

		vi.mocked(signInWithEmailAndPassword).mockResolvedValueOnce({
			user: { uid: "123" },
		});
		await loginWithEmailAndPassword({
			email: "test@test.com",
			password: "password",
		});

		expect(error.value).toBeNull();
	});

	it("error persists after failed login", async () => {
		vi.mocked(signInWithEmailAndPassword).mockRejectedValue(
			new Error("Auth Error"),
		);
		const { loginWithEmailAndPassword, error } = useLogin();
		await loginWithEmailAndPassword({
			email: "test@test.com",
			password: "wrongpassword",
		});

		expect(error.value).toBe("Auth Error");
	});
});
