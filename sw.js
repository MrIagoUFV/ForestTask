const CACHE_NAME = 'foresttask-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/fav/favicon.ico',
  '/fav/android-chrome-192x192.png',
  '/fav/android-chrome-512x512.png',
  'https://unpkg.com/react@17/umd/react.development.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
  'https://unpkg.com/babel-standalone@6/babel.min.js',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});