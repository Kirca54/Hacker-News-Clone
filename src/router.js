import { createRouter, createWebHistory } from 'vue-router';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';

// Define the routes for the app
const routes = [
    { path: '/', component: PostList }, // Home route - List of posts
    { path: '/post/:id', component: PostDetail }, // Post detail route with dynamic post ID
];

// Create the Vue Router instance
const router = createRouter({
    history: createWebHistory(), // Using HTML5 history mode
    routes, // Assign routes to the router
});

export default router;
