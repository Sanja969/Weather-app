import {
  formatData,
} from "./supportFun.js";

const nextDaysLabel = document.createElement("div");
const nextHoursLabel = document.createElement("div");


nextDaysLabel.classList.add("nextElementsLabel");
nextDaysLabel.classList.add("day");
nextHoursLabel.classList.add("nextElementsLabel");
nextHoursLabel.classList.add("hour");
const month = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export { getNextWeather, nextDaysLabel, nextHoursLabel };


const degreesMM = document.createElement("h3");
const pressure = document.createElement("h3");
const des = new Image();

async function getNextWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=6062e530dfad8ba916ef0e1058b64243`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    nextDaysLabel.innerHTML="";
    nextHoursLabel.innerHTML="";
    console.log(weatherData);
    let utc = weatherData.timezone_offset;
    let currentTime = new Date();
    let timeOffset = utc + currentTime.getTimezoneOffset() / 60;
    for (let i = 0; i < 7; i++) {
      const element = document.createElement("div");
      element.classList.add("dayBox");
      nextDaysLabel.appendChild(element);
      const date = document.createElement("h3");
      date.classList.add("dayDate");
      element.appendChild(date);
      if (i == 0) {
        date.textContent = "Tomorrow";
      } else {
        date.textContent =
          month[new Date(weatherData.daily[i].dt * 1000).getMonth()] +
          " " +
          new Date(weatherData.daily[i].dt * 1000).getDate();
      }

      const des = new Image();
      des.src = des.src =
        "http://openweathermap.org/img/wn/" +
        weatherData.daily[i].weather[0].icon +
        "@2x.png";
      element.appendChild(des);
      des.classList.add("dayDes");


      const degreesMM = document.createElement("h4");
      element.appendChild(degreesMM);
      degreesMM.textContent =
        weatherData.daily[i].temp.max.toFixed() +
        "°/" +
        weatherData.daily[i].temp.min.toFixed() +
        "°";
      degreesMM.classList.add("dayDegreesMM");
    }
    for (let i = 0; i < 24; i++) {
      const element = document.createElement("div");
      element.classList.add("hourBox");
      element.classList.add(i);
      nextHoursLabel.appendChild(element);
      const date = document.createElement("h3");
      date.classList.add("hourDate");
      element.appendChild(date);

      date.textContent =
        formatData(new Date(weatherData.hourly[i].dt * 1000), timeOffset)
          .hours +
        ":" +
        formatData(new Date(weatherData.hourly[i].dt * 1000), timeOffset).minutes;

      const des = new Image();
      des.src = des.src =
        "http://openweathermap.org/img/wn/" +
        weatherData.hourly[i].weather[0].icon +
        "@2x.png";
      element.appendChild(des);
      des.classList.add("hourDes");

      const degrees = document.createElement("h3");
      element.appendChild(degrees);
      degrees.textContent = weatherData.hourly[i].temp.toFixed() + "°";
      degrees.classList.add("hourDegrees");
    }
    
  } catch (err) {
    console.log("Wrong search");
  }
}

