import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

/* alpine if needed */
window.Alpine = Alpine
Alpine.plugin(intersect)
Alpine.start()

/* register service worker */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
    });
}

/* setup light dark mode */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
} else {
        document.documentElement.classList.remove('dark')
}
