/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js')

if (workbox) {
  workbox.core.skipWaiting()
  workbox.core.clientsClaim()
  workbox.precaching.cleanupOutdatedCaches()

  workbox.precaching.precacheAndRoute([...self.__WB_MANIFEST, '/'])

  workbox.routing.registerRoute(
    new RegExp('.+\\.js$'),
    new workbox.strategies.CacheFirst()
  )
} else {
  console.log('Workbox didn\'t load')
}