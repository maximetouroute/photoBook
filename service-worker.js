"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/photoBook/index.html","760b5dd116d27f8073681665b1722415"],["/photoBook/static/css/main.eb113789.css","6ca25f3820878d23b647ccd444aefd40"],["/photoBook/static/js/main.bc714ca9.js","21f8316724c46fccb40850245fb2d5ce"],["/photoBook/static/media/b-1.af9f1a18.jpg","af9f1a183f35743a2f5518d15a37f2dd"],["/photoBook/static/media/b-1.dbc81b13.jpg","dbc81b13f3fdc2c7b9ef1a32b411d375"],["/photoBook/static/media/b-10.d62e9c47.jpg","d62e9c47dfa7a159f1cc0e796247c251"],["/photoBook/static/media/b-11.9b993cc7.jpg","9b993cc7551bad2216092769d46f61b1"],["/photoBook/static/media/b-12.2810b9d3.jpg","2810b9d319477b0ad36dd8fab31a9e1b"],["/photoBook/static/media/b-12.a6a09c36.jpg","a6a09c36d9b75de6d1e6ddd5a8904ba7"],["/photoBook/static/media/b-13.aa50cf3a.jpg","aa50cf3a4fc955ea61214fead92d2457"],["/photoBook/static/media/b-14.698e7309.jpg","698e7309caf0277fc0b452f69dcecb8e"],["/photoBook/static/media/b-16.9d35d515.jpg","9d35d5155ee1085edc0bf3e344fa8673"],["/photoBook/static/media/b-17.99ee9029.jpg","99ee90295f33a30fc091f4b5a9b8ebe1"],["/photoBook/static/media/b-18.9b90ca23.jpg","9b90ca232e6a1d48e3b85dc7343c3627"],["/photoBook/static/media/b-2.52fe4034.jpg","52fe4034257f9147e43de9c47ea3c3e8"],["/photoBook/static/media/b-20.3eb81121.jpg","3eb811212601256b0b7a81837dbdca3e"],["/photoBook/static/media/b-22.24ab7935.jpg","24ab7935000ee27305ebe219dccf303c"],["/photoBook/static/media/b-23.4c6400d2.jpg","4c6400d2762687405127bbe05d9275aa"],["/photoBook/static/media/b-24.a283ba9d.jpg","a283ba9dec045e673b69640b742efcc4"],["/photoBook/static/media/b-25.2fb78ab7.jpg","2fb78ab74a8ee18781f61414ecf211a5"],["/photoBook/static/media/b-27.0c282513.jpg","0c282513d5a623b74f45222cb031455e"],["/photoBook/static/media/b-28.6170c805.jpg","6170c805326afd1e459b5cd3ab8011e3"],["/photoBook/static/media/b-29.a649d9bd.jpg","a649d9bdfe0239f5d95ea7c0400d5bd8"],["/photoBook/static/media/b-30.b4e349e7.jpg","b4e349e75a96e29dd8df31fa1719148c"],["/photoBook/static/media/b-32.7ffb2608.jpg","7ffb26080bd0e5f54c30f60cddd53fb9"],["/photoBook/static/media/b-33.ba11fac4.jpg","ba11fac4571a2e70af3fbd18d05129aa"],["/photoBook/static/media/b-34.ef9e1d2f.jpg","ef9e1d2f570a221f15069159f65f1bb0"],["/photoBook/static/media/b-35.f8fd7922.jpg","f8fd7922aa2466f30e7aa5922894b2e7"],["/photoBook/static/media/b-37.e3a791df.jpg","e3a791df9864b8a381317ef4b04e6cbe"],["/photoBook/static/media/b-38.4e47fa52.jpg","4e47fa523c8f0611e03e51a4a0f5ec40"],["/photoBook/static/media/b-39.b3011996.jpg","b3011996bafa612aa56a01befe5bae7b"],["/photoBook/static/media/b-4.37a096ea.jpg","37a096ea4424300e0627810283e2806d"],["/photoBook/static/media/b-40.2b1f9c2d.jpg","2b1f9c2d8f089d8723de22cc068e6869"],["/photoBook/static/media/b-44.4766df98.jpg","4766df98525def83c75124c8d1c2e116"],["/photoBook/static/media/b-46.5c759031.jpg","5c759031e235a51f3029810e3e119dbe"],["/photoBook/static/media/b-8.bbffc43a.jpg","bbffc43a0982925f38984aee937b4615"],["/photoBook/static/media/b-9.0e43d106.jpg","0e43d106b50908fc2cb5baf0936d46c7"],["/photoBook/static/media/b-9.70b49ad7.jpg","70b49ad7bfc290abb34e0e04c37d1838"],["/photoBook/static/media/profile.8ad207d1.jpg","8ad207d1d6165253e83281087533df74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],o=new URL(t,self.location),c=createCacheKey(o,hashParamName,a,/\.\w{8}\./);return[o.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var o=new Request(a,{credentials:"same-origin"});return fetch(o).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/photoBook/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});