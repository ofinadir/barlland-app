import 'regenerator-runtime/runtime';
import {precacheAndRoute} from 'workbox-precaching/precacheAndRoute';
import {cleanupOutdatedCaches} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing/registerRoute';
import {StaleWhileRevalidate, NetworkFirst, CacheFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {skipWaiting, clientsClaim, setCacheNameDetails} from 'workbox-core';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'barlland-app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(
    [
      ...self.__WB_MANIFEST,
      {
        url:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        revision: 1,
      },
    ],
    {
      ignoreURLParametersMatching: [/.*/],
    },
);

registerRoute(
    ({url}) => url.origin === 'http://localhost:8080' ||
  url.origin === 'https://https://barlland.netlify.app/',
    new StaleWhileRevalidate({
      cacheName: 'barlland-app',
      plugins: [
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
          maxEntries: 100,
        }),
      ],
    }),
);

registerRoute(
    /^https:\/\/barlland\.herokuapp\.com\/(?:(carousels|products|types|categories))/,
    new NetworkFirst({
      cacheName: 'barlland-source',
      plugins: [
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
          maxEntries: 100,
        }),
      ],
    }),
);

registerRoute(
    ({request}) => request.destination === 'script' ||
                 request.destination === 'style',
    new StaleWhileRevalidate(),
);

registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
);

cleanupOutdatedCaches();
