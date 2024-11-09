import { createRouter, createWebHistory } from 'vue-router';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';

// Define the routes for the app
const routes = [
    { path: '/', component: PostList },
    { path: '/hot', component: PostList, props: { isHot: true } },
    { path: '/post/:id', component: PostDetail },
];

// Create the Vue Router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
