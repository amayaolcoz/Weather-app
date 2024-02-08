//Query selector de los elementos que vamos a utilizar en la app
const localidad = document.querySelector('#localidad');
const hora = document.querySelector('#hora');
const temperatura = document.querySelector('#temperatura');
const actualmente = document.querySelector('#actualmente');
const icono = document.querySelector('#icono');
const humedad = document.querySelector('#humedad');
const wind = document.querySelector('#wind');
const max = document.querySelector('#max');
const min = document.querySelector('#min');

//Funcion que se ejecutara cuando la app se cargue
const getTiempoFromAPI = async (data) => {
console.log(data);
//clave de openweather api
const appId = '51b3115d55a280af2a70c316a8cb048c';
const latitud = data.coords.latitude;
const longitud = data.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&lang=es&appid=${appId}`;
try {
    const respuesta = await fetch(url);
    const datosTiempo = await respuesta.json();
    mostrarHTMLAPI(datosTiempo);
    console.log(datosTiempo)
} catch (error) {
    console.log(error);
    localidad.textContent = 'Error de acceso al servicio del tiempo';
}
};

const mostrarHTMLAPI = (datosTiempo) => {
console.log(datosTiempo);
const {
    name,
    weather,
    dt,
    wind: { speed },
    main: { temp, temp_max, temp_min, humidity }
} = datosTiempo;

localidad.textContent = name;
hora.textContent = new Date(dt * 1000).toLocaleString();
//math round redondeamos la temperatura
temperatura.textContent = Math.round(temp) + ' ºC';
humedad.textContent = humidity + '%';
wind.textContent = speed + ' m/s';
//icono del tiempo
const imagen = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
actualmente.textContent = weather[0].description;
icono.src = imagen;
icono.alt = `imagen de ${weather[0].description}`;
//Temperatura maxima y minima
max.textContent = Math.round(temp_max) + ' ºC';
min.textContent = Math.round(temp_min) + ' ºC';
};

//Cuando se cargue la pagina,veremos si es posible geolocalizar
document.addEventListener('DOMContentLoaded', () => {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getTiempoFromAPI);
} else {
    localidad.textContent = 'Tu navegador no permite geolocalizar';
}
});

// Información sobre el webmanifest
// https://developer.mozilla.org/es/docs/Web/Manifest

// Generador de imágenes para PWA
// https://www.pwabuilder.com/imageGenerator