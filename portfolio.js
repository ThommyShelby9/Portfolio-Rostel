
/* 
window.onscroll = () =>{

    var header= document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
}


var menu=document.querySelector('menu')

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
}
const weatherApiKey = 'ZHWHKTHEYCQUWQ7V3LZL7RAKK';
function getWeather(ville) {
    let weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris/?key=${weatherApiKey}&lang=fr`;
  
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.currentConditions.temp);
        document.querySelector('#condition').innerHTML = data.currentConditions.conditions;
        document.getElementById('temp').innerHTML = data.currentConditions.temp + "°";
        document.querySelector('#humidity').innerHTML = data.currentConditions.humidity + "%"; 
})} */
/* 
const weatherApiKey = 'ZHWHKTHEYCQUWQ7V3LZL7RAKK';
function getWeather(ville) {
    let weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris/?key=${weatherApiKey}&lang=fr`;
  
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.currentConditions.temp);
        document.querySelector('#condition').innerHTML = data.currentConditions.conditions;
        document.getElementById('temp').innerHTML = data.currentConditions.temp + "°";
        document.querySelector('#humidity').innerHTML = data.currentConditions.humidity + "%"; 


  
*/

const apikey= '9998a4b8be47f92e6c2e16e9cdf73a50'
const url=`https://api.aerisapi.com/closest/forecasts/dallas,texas?&client_id=Vy5ZEi87SmeOAq7OM8Jol&client_secret=Vy5ZEi87SmeOAq7OM8Jol&client_secret=Su4fFSOqTuatpZHpqnpVNVmgUjNny3st7cIgpJJE`
/* const url= `http://api.aerisapi.com/places/forecasts/dallas,texas&client_id=Vy5ZEi87SmeOAq7OM8Jol&client_secret=Su4fFSOqTuatpZHpqnpVNVmgUjNny3st7cIgpJJE` */

fetch(url)

.then(response => response.json())
.then((data => [
    console.log(data)
])) 



