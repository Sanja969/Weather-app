import _ from "lodash";
import {
  drawHum,
  drawSun,
  canvasHum,
  canvasSun,
  formatData,
  getDirection,
  switchBackground,
  switchBackgroundNight,
 
 
} from "./supportFun.js"; 

import { getNextWeather, nextDaysLabel, nextHoursLabel } from "./nextWeather.js";;
import "./style.css";
import "./nextDays.css";

const logo=document.createElement("link");
document.head.appendChild(logo);

logo.setAttribute("rel", "favicon");
logo.setAttribute("type", "image/png");
// document.body.appendChild(backgroudImage);



const header = document.createElement("header");
const main = document.createElement("main");
const title = document.createElement("h1");
const headerBox = document.createElement("div");
const input = document.createElement("input");
const label = document.createElement("LABEL");
const btn = document.createElement("button");

const currentW = document.createElement("div");
main.appendChild(currentW);
currentW.classList.add("currentW");
const tempLabel = document.createElement("div");
const city = document.createElement("h2");
const degrees = document.createElement("h2");
const degreesMM = document.createElement("h3");
const pressure = document.createElement("h3");
const des = new Image();


const description = document.createElement("h2");

const desLabel = document.createElement("div");
const humidityTitle = document.createElement("h2");
const feels_like = document.createElement("h3");

const sunLabel = document.createElement("div");
const sunRise = document.createElement("p");
const sunSet = document.createElement("p");
const ssTitle = document.createElement("h2");
const ss = document.createElement("div");
const current = document.createElement("p");

const windLabel = document.createElement("div");
const windTitle = document.createElement("h2");

const wind = document.createElement("h3");
const windDirection = document.createElement("h3");



btn.classList.add("btn");
btn.textContent = "Get weather";
input.setAttribute("id", "csearch");
input.setAttribute("type", "search");
label.setAttribute("for", "csearch");
label.textContent = "Enter city:";
title.textContent='Weather';
title.classList.add("title");
headerBox.classList.add("headerBox");
headerBox.appendChild(label);
headerBox.appendChild(input);
headerBox.appendChild(btn);
header.appendChild(title);
header.appendChild(headerBox);

document.body.appendChild(main);
document.body.appendChild(header);

tempLabel.classList.add("tempLabel");
city.classList.add("city");
degrees.classList.add("degrees");
degreesMM.classList.add("degreesMaxMin");
des.classList.add("des");

tempLabel.appendChild(city);
tempLabel.appendChild(degrees);
tempLabel.appendChild(degreesMM);
tempLabel.appendChild(des);
currentW.appendChild(tempLabel);
pressure.classList.add("pressure");
tempLabel.appendChild(pressure);

desLabel.classList.add("tempLabel");
humidityTitle.classList.add("humadityTitle");
humidityTitle.textContent = "HUMIDITY";
pressure.classList.add("pressure");
wind.classList.add("wind");
feels_like.classList.add("feels_like");

desLabel.appendChild(humidityTitle);
desLabel.appendChild(feels_like);
currentW.appendChild(desLabel);

sunLabel.classList.add("tempLabel");
sunRise.classList.add("sunRise");
sunSet.classList.add("sunSet");
ssTitle.classList.add("SSTitle");
ssTitle.textContent="SUNRISE AND SUNSET";
ss.classList.add("SS");
current.classList.add("current");
current.textContent='';

sunLabel.appendChild(ssTitle)
sunLabel.appendChild(ss);
sunLabel.appendChild(current);
ss.appendChild(sunRise);
ss.appendChild(sunSet);
currentW.appendChild(sunLabel);

windLabel.classList.add("windLabel");
windLabel.appendChild(windTitle);

windLabel.appendChild(wind);
windLabel.appendChild(windDirection);
currentW.appendChild(windLabel);
windTitle.textContent="WIND";
windTitle.classList.add("windTitle");

wind.classList.add("wind");
windDirection.classList.add("windDirection");

getWeather();

btn.addEventListener("click",function(){
getWeather();
})

// document.body.style.backgroundImage="url('./cloud.gif')";


async function getWeather() {
      let cityName;
      if (input.value == "") {
        cityName = "Tokyo";
      } else {
        cityName = input.value;
      }
   
     
      desLabel.appendChild(canvasHum);
      sunLabel.appendChild(canvasSun);
      
  try {
 
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6062e530dfad8ba916ef0e1058b64243`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    logo.setAttribute(
      "href",
      "http://openweathermap.org/img/wn/04n" + "@2x.png"
    );
    let utc = weatherData.timezone / 3600;
    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    city.textContent =
    weatherData.name.toUpperCase() + " - " + weatherData.sys.country;
    degrees.textContent = weatherData.main.temp.toFixed() + "°";
    degreesMM.textContent =
      weatherData.main.temp_max.toFixed() +
      " ° / " +
      weatherData.main.temp_min.toFixed() +
      " °";
     

        
        des.src =
          "http://openweathermap.org/img/wn/" +
          weatherData.weather[0].icon +
          "@2x.png";
   

    drawHum(weatherData.main.humidity); 
    feels_like.textContent ="Feels like: "+ weatherData.main.feels_like.toFixed() + "°";
    pressure.textContent = "Pressure: " + weatherData.main.pressure + " hPa";
    wind.textContent = "Speed: " + weatherData.wind.speed + "m/s";
    
     windDirection.textContent =
       "Direction: " + getDirection(weatherData.wind.deg);;
     
    let currentTime = new Date();
     let timeOffset = utc + currentTime.getTimezoneOffset() / 60;
    current.textContent =
      formatData(currentTime, timeOffset).hours +
      ":" +
      formatData(currentTime, timeOffset).minutes +
      " \t \t\t UTC " +
      utc;

    let rise = new Date(weatherData.sys.sunrise * 1000);
    let set = new Date(weatherData.sys.sunset * 1000);
    sunRise.textContent =
      formatData(rise, timeOffset).hours +
      ":" +
      formatData(rise, timeOffset).minutes;
    sunSet.textContent =
      formatData(set, timeOffset).hours +
      ":" +
      formatData(set, timeOffset).minutes;
   
    let c;
    let x;
    c=set-rise;
    if (currentTime <= rise){
      x=0;
      switchBackgroundNight(weatherData.weather[0].main);
    }
    else if (currentTime > set) {
      x=180;
      switchBackgroundNight(weatherData.weather[0].main);
    }
    else{
      x = (180 * (currentTime - rise)) /(c);
      switchBackground(weatherData.weather[0].main);
   
    }
    drawSun(x);
    getNextWeather(lat,lon);
    main.appendChild(nextDaysLabel);
    main.appendChild(nextHoursLabel);
  }
  catch (err) {
    console.log("Wrong search");
  }
}


const footer = document.createElement("footer");
document.body.appendChild(footer);
const footerCon = document.createElement("h3");
footer.appendChild(footerCon);
footerCon.textContent ="Copyright © Sanja969-Quantum";









 






