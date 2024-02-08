// Instalar el service worker
self.addEventListener('install', (e) => {
    // Aquí podríamos almacenar en el caché los archivos estáticos de la app para que funcionara off-line
  });
  
  // Activar el service worker
  self.addEventListener('activate', (e) => {
    // Aquí podríamos gestionar el versionamiento de la app
  });
  
  // Gestionar la carga de la app
  self.addEventListener('fetch', (e) => {
    // Aquí podemos servir el contenido del cache o mostrar una página de error si hay algún fallo
  });
  
  // Al tener este fetch, un manifest, y una página de inicio, ya disponemos de una PWA
  // Si la instalamos en chrome desde la barra de navegación, podemos ver la app navegando a: chrome://apps
  