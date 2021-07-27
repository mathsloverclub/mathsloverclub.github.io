const myCacheName = "mathLCv1";
const filesToCache = ["index.html"];
self.oninstall = (e) => {
  console.log(`service worker installed. the event is ${e}`);
  e.waitUntil(
    caches.open(myCacheName).then((cache) => {
      cache.addAll(filesToCache);
      return console.log("successfully cached");
    })
  );
  self.skipWaiting(); //never delete
};

self.onactivate = (e) => {
  console.log(`service worker activated. The event is ${e}`);
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== myCacheName) {
            console.log("unnecessary cache cleared");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
};

self.onfetch = (e) => {
  console.log("fetch started");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //Make copy/clone of response
        const resClone = res.clone();
        caches.open(myCacheName).then((cache) => {
          cache.add(resClone);
          console.log("successfully cached");
        });
        return res;
      })
      .catch((err) => {
        console.log(`Fetch failed. Using cache. The error is ${err}`);
        return caches.match(e.request);
      })
  );
};
//aclnjeioajfrioe
