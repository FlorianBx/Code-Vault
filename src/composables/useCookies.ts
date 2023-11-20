export function useCookies() {
  const setCookie = (
    name: string,
    value: string,
    options: {
      expires?: Date;
      secure?: boolean;
      HttpOnly?: boolean;
    } = {},
  ): void => {
    const { expires, secure, HttpOnly } = options;
    let cookie = `${name}=${value}`;
    if (expires) {
      cookie += `; expires=${expires.toUTCString()}`;
    }
    if (secure) {
      cookie += "; secure";
    }
    if (HttpOnly) {
      cookie += "; HttpOnly";
    }
    document.cookie = cookie;
  };

  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
  };
}
