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

const header = document.createElement("header");
const main = document.createElement("main");
document.body.appendChild(main);
document.body.appendChild(header);

const content = document.createElement("div");
main.appendChild(content);
content.classList.add("content");

const headerBox = document.createElement("div");
headerBox.classList.add("headerBox");
header.appendChild(headerBox);

// const label = document.createElement("LABEL");
// headerBox.appendChild(label);
// label.setAttribute("for", "csearch");


const input = document.createElement("input");
headerBox.appendChild(input);
input.setAttribute("id", "csearch");
input.setAttribute("type", "search");
input.setAttribute("onfocus", "this.value=''");
input.value = "Search city";

const btn = document.createElement("button");
headerBox.appendChild(btn);
btn.classList.add("btn");
btn.textContent = "Get weather";

const currentW = document.createElement("div");
content.appendChild(currentW);
currentW.classList.add("currentW");

const tempLabel = document.createElement("div");
currentW.appendChild(tempLabel);

tempLabel.classList.add("tempLabel");

const city = document.createElement("h2");
tempLabel.appendChild(city);
city.classList.add("city");

const degrees = document.createElement("h2");
tempLabel.appendChild(degrees);
degrees.classList.add("degrees");

const degreesMM = document.createElement("h3");
tempLabel.appendChild(degreesMM);
degreesMM.classList.add("degreesMaxMin");

const des = new Image();
tempLabel.appendChild(des);
des.classList.add("des");

const pressure = document.createElement("h3");
tempLabel.appendChild(pressure);
pressure.classList.add("pressure");

const desLabel = document.createElement("div");
currentW.appendChild(desLabel);
desLabel.classList.add("tempLabel");

const humidityTitle = document.createElement("h2");
desLabel.appendChild(humidityTitle);
humidityTitle.classList.add("humadityTitle");
humidityTitle.textContent = "HUMIDITY";

const feels_like = document.createElement("h3");
feels_like.classList.add("feels_like");
desLabel.appendChild(feels_like);

const sunLabel = document.createElement("div");
currentW.appendChild(sunLabel);
sunLabel.classList.add("tempLabel");

const ssTitle = document.createElement("h2");
sunLabel.appendChild(ssTitle);
ssTitle.classList.add("SSTitle");
ssTitle.textContent = "SUNRISE AND SUNSET";

const current = document.createElement("p");
sunLabel.appendChild(current);
current.classList.add("current");
current.textContent = "";

const ss = document.createElement("div");
sunLabel.appendChild(ss);
ss.classList.add("SS");

const sunRise = document.createElement("p");
ss.appendChild(sunRise);
sunRise.classList.add("sunRise");

const sunSet = document.createElement("p");
ss.appendChild(sunSet);
sunSet.classList.add("sunSet");

const windLabel = document.createElement("div");
currentW.appendChild(windLabel);
windLabel.classList.add("windLabel");

const windTitle = document.createElement("h2");
windLabel.appendChild(windTitle);
windTitle.classList.add("windTitle");

const wind = document.createElement("h3");
windLabel.appendChild(wind);
wind.classList.add("wind");
windTitle.textContent = "WIND";

const windDirection = document.createElement("h3");
windLabel.appendChild(windDirection);
windDirection.classList.add("windDirection");

getWeather();

btn.addEventListener("click",function(){
getWeather();
})


async function getWeather() {
      let cityName;
      if (input.value == "Search city") {
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
    logo.setAttribute("href", "http://openweathermap.org/img/wn/04n@2x.png");
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
    content.appendChild(nextDaysLabel);
    currentW.appendChild(nextHoursLabel);
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









 






