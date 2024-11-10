import { createRouter, createWebHistory } from 'vue-router';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';

const routes = [
    {
        path: '/',
        name: 'All',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }), // Pass search query as a prop
    },
    {
        path: '/hot',
        name: 'Hot',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }),
    },
    {
        path: '/show',
        name: 'Show HN',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }),
    },
    {
        path: '/ask',
        name: 'Ask HN',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }),
    },
    {
        path: '/polls',
        name: 'Polls',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }),
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: PostList,
        props: route => ({ searchQuery: route.query.search || '' }),
    },
    { path: '/post/:id', component: PostDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
