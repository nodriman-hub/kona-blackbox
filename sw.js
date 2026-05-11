self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});
self.addEventListener('fetch', (e) => {
    // Permite que la app funcione aunque la red falle un momento
});
