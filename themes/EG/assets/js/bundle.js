import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

window.Alpine = Alpine
Alpine.plugin(intersect)
Alpine.start()

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
    });
}