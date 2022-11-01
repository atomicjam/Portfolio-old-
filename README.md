# elliotgoode.co.uk

- AWS Amplify 
- Hugo 
- Tailwind.css
- Alpine.js
- Workbox service worker

Static site for www.elliotgoode.co.uk

## Local Development

clone repo to local machine

- brew install hugo
- npm run dev
- http://localhost:1313 

note: service worker wont work on http and locally so will only be built as part of the production build script


## Production
### AWS Amplify

App = EG, will auto deploy changes to the main branch in github.

### Workbox Service Worker

A service worker is generated from the build, which precaches all of the files for the site, allowing full offline support for staff, when a new build is created the old sw is invalidated.

If you manually need to invalidate the cache, the workbox-config.js has cache name that can be bumped. 