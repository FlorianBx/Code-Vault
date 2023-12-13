import { describe, test, expect, beforeEach } from "vitest";
import admin from "firebase-admin";
import { createPinia, setActivePinia } from "pinia";
import { useLogin } from "../useLogin";

async function createTestUser() {
  try {
    await admin.auth().createUser({
      email: "test@test.com",
      password: "123456",
    });
    console.log("Test user created");
  } catch (error) {
    console.log("Error creating user: ", error);
  }
}

createTestUser();

describe("useLogin", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("loginWithEmailAndPassword", async () => {
    const { loginWithEmailAndPassword, error } = useLogin();
    const user = { email: "test@test.com", password: "123456" };
    const result = await loginWithEmailAndPassword(user);

    expect(result).not.toBe(null);
    expect(error.value).toBe(null);
  });
});
