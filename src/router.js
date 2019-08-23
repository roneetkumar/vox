import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";

import Login from "@/components/login-page/LoginCard";
import Home from "@/components/Home";
import Lea from '@/components/lea-page/Lea'
import Mio from '@/components/mio-page/Mio'
import News from "@/components/news-page/News";
import Service from "@/components/service-page/Service";
import About from "@/components/about-page/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/home',
            name: 'Home',
            redirect: '/home/lea',
            component: Home,
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'lea',
                    name: 'Lea',
                    component: Lea,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'mio',
                    name: 'Mio',
                    component: Mio,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'news',
                    name: 'News',
                    component: News,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'service',
                    name: 'Services',
                    component: Service,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'about',
                    name: 'About',
                    component: About,
                    meta: { requiresAuth: true },
                }
            ]
        },
    ],
})


router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
});


export default router;