const ApiKey='87fbb0dfb413541ce44da1dc266e1431';
const UrlBase='https://api.openweathermap.org/data/2.5/weather';

const btnCity = document.querySelector('#btnCity');
const inputCity =document.querySelector('#city');

const fetchApi = url => fetch(url).then(response=>response.json());


async function getClima(lat, lon, apiKey){
    const url=`${UrlBase}?lat=${lat}&lon=${ lon }&appid=${ apiKey }`
    const clima= await fetchApi(url);
    console.log(clima);
    const temperature= (clima.main.temp -273.15).toFixed(2);
    document.querySelector('h2').innerHTML= temperature+"°c - "+ clima.name;
    pintaFondo(temperature)
    pintaEmoji(temperature)

}
async function getClimaByCity(city,apiKey){
    const url=`${UrlBase}?q=${ city }&appid=${apiKey}`;
    console.log(url);
    const clima= await fetchApi(url);
    const temperature= (clima.main.temp -273.15).toFixed(2);
    document.querySelector('h2').innerHTML= temperature+"°c - "+ clima.name;
    pintaFondo(temperature);
    pintaEmoji(temperature)
}

function pintaFondo(temp){
  const fondo = document.querySelector('body');
  if(temp < 13){
    fondo.style.background='#42cec2';
  } else if(temp < 22){
    fondo.style.background='#97fcdb';
  } else {
    fondo.style.background='#e6cb7e';
  }
}


function pintaEmoji(temp){
  const emo= document.querySelector('#emoji');
  if(temp <13 ){
    emo.innerHTML= '🍧,🥶'
  } else if(temp<22){
    emo.innerHTML= '😎,⛅'
  } else{
    emo.innerHTML='🥵 💀'
  }


}


// Obtener geolicaluzación
navigator.geolocation.getCurrentPosition((position) => {
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    getClima(lat,lon, ApiKey);
  });

  function buttonAction(){
    const city = inputCity.value;
    if(city){   
    getClimaByCity(city,ApiKey);
    }

  }

  btnCity.addEventListener('click',buttonAction);

