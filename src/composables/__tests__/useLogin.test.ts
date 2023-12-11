import { describe, test, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useLogin } from "../useLogin";

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
