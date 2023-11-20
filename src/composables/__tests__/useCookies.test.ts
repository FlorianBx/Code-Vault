import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { useCookies } from "../useCookies";

interface SimulatedCookies {
  [key: string]: string;
}

describe("useCookies", () => {
  let simulatedCookies: SimulatedCookies = {};
  const cookies = useCookies();

  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      configurable: true,
      get: () => {
        return Object.entries(simulatedCookies)
          .map(([cookieName, cookieValue]) => `${cookieName}=${cookieValue}`)
          .join("; ");
      },

      set: (newValue) => {
        const parts = newValue.split("; ");
        const [cookieName, cookieValue] = parts[0].split("=");
        simulatedCookies[cookieName] = cookieValue;

        for (const part of parts.slice(1)) {
          simulatedCookies[cookieName] += `; ${part}`;
        }
      },
    });
  });

  afterEach(() => {
    simulatedCookies = {};
  });

  test("setCookie correctly sets a cookie", () => {
    const { setCookie } = useCookies();
    setCookie("test", "value");
    expect(document.cookie).toContain("test=value");
  });

  test("getCookie retrieves the value of an existing cookie", () => {
    cookies.setCookie("test", "value");
    const { getCookie } = useCookies();
    expect(getCookie("test")).toBe("value");
  });

  test("getCookie returns null if the cookie does not exist", () => {
    expect(document.cookie).toBe("");
    const value = cookies.getCookie("nonExistingCookie");
    expect(value).toBeNull();
  });

  test("deleteCookie removes a cookie", () => {
    cookies.setCookie("test", "value");
    const { deleteCookie } = useCookies();
    deleteCookie("test");
    expect(document.cookie).toContain("test=");
  });

  test("setCookie adds options correctly", () => {
    const { setCookie } = useCookies();

    const dateExpire = new Date();
    dateExpire.setDate(dateExpire.getDate() + 7);

    setCookie("testOption", "value", {
      expires: dateExpire,
      secure: true,
      HttpOnly: true,
    });

    expect(document.cookie).toContain("testOption=value");
    expect(document.cookie).toContain("secure");
    expect(document.cookie).toContain("HttpOnly");
  });
});
