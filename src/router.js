import { createRouter, createWebHistory } from 'vue-router';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';

// Define the routes for the app
const routes = [
    {
        path: '/',
        name: 'All',
        component: PostList,
        // Fetch all posts by default
    },
    {
        path: '/hot',
        name: 'Hot',
        component: PostList,
        // Fetch hot posts
    },
    {
        path: '/show',
        name: 'Show HN',
        component: PostList,
        // Fetch Show HN posts
    },
    {
        path: '/ask',
        name: 'Ask HN',
        component: PostList,
        // Fetch Ask HN posts
    },
    {
        path: '/polls',
        name: 'Polls',
        component: PostList,
        // Fetch Polls posts
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: PostList,
        // Fetch Jobs posts
    },
    { path: '/post/:id', component: PostDetail },
];

// Create the Vue Router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
