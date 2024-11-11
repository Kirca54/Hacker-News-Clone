const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new GenerateSW({
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        // Caching API requests from the Hacker News Firebase API
                        urlPattern: ({ url }) => url.origin === 'https://hacker-news.firebaseio.com',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'api-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 24 * 60 * 60, // Cache for 1 day
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                    {
                        // Caching static resources like JS, CSS, images, and HTML
                        urlPattern: ({ url }) => url.origin === self.location.origin,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'static-resources',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
                            },
                        },
                    },
                ],
            }),
        ],
    },
};
