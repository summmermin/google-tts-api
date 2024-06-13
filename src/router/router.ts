import {createWebHistory, createRouter} from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [

            {
                path: "/about",
                name: "AboutView",
                component: AboutView,
            },
        ],
    },
    {
        path: "/login",
        name: "LoginView",
        component: LoginView,
    },
    {
        path: "/home",
        name: "HomeView",
        component: HomeView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
