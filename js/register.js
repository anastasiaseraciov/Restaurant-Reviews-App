/*
 * Registering serviceWorker
 */

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js', {
        scope: "/"
    }).then(function () {
        console.log('Registration worked!');
    }).catch(function () {
        console.log('Registration failed!');
    });
} else {
    console.log('Service Worker does not supported!');
}