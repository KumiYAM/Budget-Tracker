const APP_PREFIX = 'budget';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;



const FILES_TO_CACHE = [
    "./index.html",
     "./css/style.css",
    "./js/idb.js",
    "./js/index.js",
    "./manifect.json",
    "./icon/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./icons/icon-128/128png",
    "./icons/icon-144x144.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png"
];
// install the eventListner
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log("Your files were pre-cached sucessfully!" + CACHE_NAME);
            return Caches.addAll(FILES_TO_CACHE);
        })
    )
});
/*
// activate
self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            const casheKeepList = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            });
            cacheKeepList.push(CACHE_NAME);
            return Promise.all(
                keyList.map(function (key, i) {
                    if (cacheKeepList.indexOf(key) === -1) {
                        return cache.delete(keyList[i]);
                    }
                })
            );
        })
    );
});
*/
// fech
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
                return request;
            } else {
                return fetch(e.request);
            }
        })
    )
})