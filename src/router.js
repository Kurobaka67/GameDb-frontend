import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./pages/Dashboard.vue')
            },
            {
                path: '/games',
                name: 'games',
                component: () => import('./pages/GameView.vue'),
            },
            {
                path: '/gamedetail/:id',
                name: 'gamedetail',
                component: () => import('./pages/GameDetail.vue'),
                props: true
            },
            {
                path: '/gameedit/:id',
                name: 'gameedit',
                component: () => import('./pages/GameEdit.vue'),
                props: true
            },
            {
                path: '/gamenew',
                name: 'gamenew',
                component: () => import('./pages/GameNew.vue')
            }
            ,
            {
                path: '/platforms',
                name: 'platforms',
                component: () => import('./pages/PlatformsView.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/signon',
        name: 'signon',
        component: () => import('./pages/SignOn.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
