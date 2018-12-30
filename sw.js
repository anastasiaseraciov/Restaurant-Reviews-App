/* Define the Caches */

let staticCacheName = 'mws-restaurant-static-v';

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                    '/',
                    '/index.html',
                    '/restaurant.html',
                    '/css/styles.css',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/register.js',
                    '/js/restaurant_info.js',
                    '/img/*',
                    '/data/restaurants.json',
                    '//normalize-css.googlecode.com/svn/trunk/normalize.css'
                ])
                .catch(error => {
                    console.log('Caches open failed: ' + error);
                });
        }));
});

// intercept all requests either return cached asset or fetch from network
self.addEventListener('fetch', event => {
    event.respondWith(
        // Add cache.put to cache images on each fetch
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(staticCacheName).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(error => {
            if (event.request.url.includes('.jpg')) {
                return caches.match('/img/fixed/offline_img1.png');
            }
            return new Response('Not connected to the internet', {
                status: 404,
                statusText: "Not connected to the internet"
            });
        })
    );
});

// delete old/unused static caches
self.addEventListener('activate', event => {
    event.waitUntil(
        // caches.delete('-restaurant-static-001')
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('mws-restaurant-') && cacheName !== staticCacheName;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});