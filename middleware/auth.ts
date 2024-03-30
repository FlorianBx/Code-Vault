function isAuthenticated(): boolean {
  return false;
}
export default defineNuxtRouteMiddleware(() => {
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});
