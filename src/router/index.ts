import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import EditSnippetView from "../views/EditSnippetView.vue";
import ShowSnippetView from "../views/ShowSnippetView.vue";
import CreateSnippetView from "../views/CreateSnippetView.vue";
import PricingView from "../views/PricingView.vue";
// import MySnippetsView from "../views/MySnippetsView.vue

// import TestLayout from "../views/TestLayout.vue";

const routes = [
	{ path: "/", component: HomeView },
	{
		path: "/login",
		name: "Login",
		component: LoginView,
		meta: { requiresAuth: false },
	},
	{
		path: "/register",
		name: "Register",
		component: RegisterView,
		meta: { requiresAuth: false },
	},
	{
		path: "/snippet/:id",
		name: "ShowSnippet",
		component: ShowSnippetView,
		meta: { requiresAuth: false },
	},
	{
		path: "/edit/:id",
		name: "EditSnippet",
		component: EditSnippetView,
		meta: { requiresAuth: true },
	},
	{
		path: "/create-snippet",
		name: "CreateSnippet",
		component: CreateSnippetView,
		meta: { requiresAuth: true },
	},
	{
		path: "/price",
		name: "Pricing",
		component: PricingView,
		meta: { requiresAuth: false },
	},
	{
		path: "/profile",
		name: "Profile",
		component: ProfileView,
		meta: { requiresAuth: true },
	},
	// {
	// 	path: "/my-snippets",
	// 	name: "MySnippets",
	// 	component: MySnippetsView,
	// 	meta: { requiresAuth: true },
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, _, next) => {
	const authStore = useAuthStore();
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

	if (requiresAuth && !authStore.isLoggedIn) {
		next({ path: "/login" });
	} else {
		next();
	}
});

export default router;
