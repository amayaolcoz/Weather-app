// Esto sirve par registrar datos que vengan del sw.js, como actualizar versiones,gestionar la carga de la app,etc...
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then((registrado) => console.log('SW instalado correctamente...', registrado))
      .catch((error) => console.log('Error en la instalación del SW', error));
  } else {
    console.log('SW no soportado');
  }
  
