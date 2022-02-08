/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/supportFun.js":
/*!***************************!*\
  !*** ./src/supportFun.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawHum": () => (/* binding */ drawHum),
/* harmony export */   "drawSun": () => (/* binding */ drawSun),
/* harmony export */   "canvasHum": () => (/* binding */ canvasHum),
/* harmony export */   "canvasSun": () => (/* binding */ canvasSun),
/* harmony export */   "formatData": () => (/* binding */ formatData),
/* harmony export */   "getDirection": () => (/* binding */ getDirection),
/* harmony export */   "switchBackground": () => (/* binding */ switchBackground),
/* harmony export */   "switchBackgroundNight": () => (/* binding */ switchBackgroundNight)
/* harmony export */ });
/* harmony import */ var _assets_sun1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sun1.png */ "./src/assets/sun1.png");
/* harmony import */ var _assets_day_clear_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/day-clear.jpg */ "./src/assets/day-clear.jpg");
/* harmony import */ var _assets_day_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/day-clouds.jpg */ "./src/assets/day-clouds.jpg");
/* harmony import */ var _assets_day_drizzle_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/day-drizzle.jpg */ "./src/assets/day-drizzle.jpg");
/* harmony import */ var _assets_day_mist_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/day-mist.jpg */ "./src/assets/day-mist.jpg");
/* harmony import */ var _assets_day_rain_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/day-rain.jpg */ "./src/assets/day-rain.jpg");
/* harmony import */ var _assets_day_snow_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/day-snow.gif */ "./src/assets/day-snow.gif");
/* harmony import */ var _assets_day_storm_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/day-storm.jpg */ "./src/assets/day-storm.jpg");
/* harmony import */ var _assets_night_clear_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/night-clear.jpg */ "./src/assets/night-clear.jpg");
/* harmony import */ var _assets_night_clouds_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/night-clouds.jpg */ "./src/assets/night-clouds.jpg");
/* harmony import */ var _assets_night_drizzle_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/night-drizzle.jpg */ "./src/assets/night-drizzle.jpg");
/* harmony import */ var _assets_night_mist_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/night-mist.jpg */ "./src/assets/night-mist.jpg");
/* harmony import */ var _assets_night_rain_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/night-rain.gif */ "./src/assets/night-rain.gif");
/* harmony import */ var _assets_night_snow_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/night-snow.jpg */ "./src/assets/night-snow.jpg");
/* harmony import */ var _assets_night_storm_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/night-storm.jpg */ "./src/assets/night-storm.jpg");


















const sun1 = new Image();
sun1.src=_assets_sun1_png__WEBPACK_IMPORTED_MODULE_0__;




const canvasHum = document.createElement("canvas");
const canvasSun = document.createElement("canvas");



canvasHum.setAttribute("width", "300");
canvasHum.classList.add("canvasHum");
canvasSun.classList.add("canvasS");

function drawHum(humadity) {
  
  canvasHum.width = 300;
  canvasHum.height = 300;
  let ctx = canvasHum.getContext("2d");
  ctx.clearRect(0,0,canvasHum.width,canvasHum.height);
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(200, 153, 60, 0.08)";
  ctx.arc(150,150,70,(120 * Math.PI) / 180,(420 * Math.PI) / 180);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = "round";

  ctx.strokeStyle = "rgba(0, 150, 0)";
  ctx.arc(150,150,70,(120 * Math.PI) / 180,((120+(humadity/100)*300) * Math.PI) / 180);
  ctx.stroke();

  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.textAlign = "center";
  ctx.fillText(humadity+"%", 150, 165);
  ctx.stroke();

  ctx.font = "12px Comic Sans MS";
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.textAlign = "center";
  ctx.fillText(0, 120, 238);
  ctx.stroke();

  ctx.font = "12px Comic Sans MS";
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.textAlign = "center";
  ctx.fillText(100, 180, 238);
  ctx.stroke();
}

function drawSun(x) {
 
  let y = (x * Math.PI) / 180;
  let b = 150 - (Math.sin(y) * 100);
  console.log(x + " ab  " + b);
  let ctx = canvasSun.getContext("2d");
  ctx.clearRect(0, 0, canvasSun.width, canvasSun.height);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "orange";

  ctx.drawImage(sun1, x*1.45-20+20, b-20, 40, 40);
  ctx.stroke();

  let scale = 20;

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(200, 153, 60, 0.08)";

  let x1 = -20;
  let y1 = 0;
  let s;

  while (x1 < 200) {
    s= (x1 * Math.PI) / 180
    y1 = 150- Math.sin(s)*100;
    ctx.lineTo(x1*1.45+20, y1);
    x1 = x1 + 1;
  }
  ctx.stroke();


}
function formatData(x,t){
  
  let hours;
  let minutes;
  let zoneHours=x.getHours()+t;

  if(zoneHours >=24){
    zoneHours=zoneHours % 24;
  }
  else if(zoneHours<=0){
    zoneHours=24+zoneHours;
  }

  if (x < 10) {
    hours = "0" + zoneHours;
  } else {
    hours = zoneHours;
  }
  if (x.getMinutes() < 10) {
    minutes = "0" + x.getMinutes();
  } else {
    minutes = x.getMinutes();
  }
return {hours,minutes};
}


function getDirection(angle) {
  var directions = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  return directions[index];
}
function switchBackground(x){

  switch (x) {
    case "Clear":
      document.body.style.backgroundImage = `url(${_assets_day_clear_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
      break;

    case "Clouds":
      document.body.style.backgroundImage = `url(${_assets_day_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
      break;

    case "Rain":
      document.body.style.backgroundImage = `url(${_assets_day_rain_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
      break;

    case "Snow":
      document.body.style.backgroundImage = `url(${_assets_day_snow_gif__WEBPACK_IMPORTED_MODULE_6__})`;
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = `url(${_assets_day_storm_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
      break;

    case "Mist":
      document.body.style.backgroundImage = `url(${_assets_day_mist_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
      break;

    case "Drizzle":
      document.body.style.backgroundImage = `url(${_assets_day_drizzle_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
      break;

    default:
      document.body.style.backgroundImage = `url(${_assets_day_mist_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
      break;

  }

}

function switchBackgroundNight(x) {
  switch (x) {
    case "Clear":
      document.body.style.backgroundImage = `url(${_assets_night_clear_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
      break;

    case "Clouds":
      document.body.style.backgroundImage = `url(${_assets_night_clouds_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
      break;

    case "Rain":
      document.body.style.backgroundImage = `url(${_assets_night_rain_gif__WEBPACK_IMPORTED_MODULE_12__})`;
      break;

    case "Snow":
      document.body.style.backgroundImage = `url(${_assets_night_snow_jpg__WEBPACK_IMPORTED_MODULE_13__})`;
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = `url(${_assets_night_storm_jpg__WEBPACK_IMPORTED_MODULE_14__})`;
      break;

    case "Mist":
      document.body.style.backgroundImage = `url(${_assets_night_mist_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
      break;

    case "Drizzle":
      document.body.style.backgroundImage = `url(${_assets_night_drizzle_jpg__WEBPACK_IMPORTED_MODULE_10__})`;
      break;

    default:
      document.body.style.backgroundImage = `url(${_assets_night_mist_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
      break;
  }
}






/***/ }),

/***/ "./src/assets/day-clear.jpg":
/*!**********************************!*\
  !*** ./src/assets/day-clear.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35ece8933aa566578257.jpg";

/***/ }),

/***/ "./src/assets/day-clouds.jpg":
/*!***********************************!*\
  !*** ./src/assets/day-clouds.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfdb3dc08d37d7f27c18.jpg";

/***/ }),

/***/ "./src/assets/day-drizzle.jpg":
/*!************************************!*\
  !*** ./src/assets/day-drizzle.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75cfca388231b9f684f6.jpg";

/***/ }),

/***/ "./src/assets/day-mist.jpg":
/*!*********************************!*\
  !*** ./src/assets/day-mist.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "878e152b350f3b522043.jpg";

/***/ }),

/***/ "./src/assets/day-rain.jpg":
/*!*********************************!*\
  !*** ./src/assets/day-rain.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29362d5f33e02352056e.jpg";

/***/ }),

/***/ "./src/assets/day-snow.gif":
/*!*********************************!*\
  !*** ./src/assets/day-snow.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc80af78190c4fa9babc.gif";

/***/ }),

/***/ "./src/assets/day-storm.jpg":
/*!**********************************!*\
  !*** ./src/assets/day-storm.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40adc889e82447534981.jpg";

/***/ }),

/***/ "./src/assets/night-clear.jpg":
/*!************************************!*\
  !*** ./src/assets/night-clear.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "067b46f66ef9afc5f4e2.jpg";

/***/ }),

/***/ "./src/assets/night-clouds.jpg":
/*!*************************************!*\
  !*** ./src/assets/night-clouds.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d70e2fb8e85132b9b77.jpg";

/***/ }),

/***/ "./src/assets/night-drizzle.jpg":
/*!**************************************!*\
  !*** ./src/assets/night-drizzle.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fd03ad1dd555022679b.jpg";

/***/ }),

/***/ "./src/assets/night-mist.jpg":
/*!***********************************!*\
  !*** ./src/assets/night-mist.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1059340148bc19b0c88c.jpg";

/***/ }),

/***/ "./src/assets/night-rain.gif":
/*!***********************************!*\
  !*** ./src/assets/night-rain.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb783f59f723e7eab715.gif";

/***/ }),

/***/ "./src/assets/night-snow.jpg":
/*!***********************************!*\
  !*** ./src/assets/night-snow.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ecde5ca04890438b0ca.jpg";

/***/ }),

/***/ "./src/assets/night-storm.jpg":
/*!************************************!*\
  !*** ./src/assets/night-storm.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "819b917e7ed714d59283.jpg";

/***/ }),

/***/ "./src/assets/sun1.png":
/*!*****************************!*\
  !*** ./src/assets/sun1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "674a05548192cb62829c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/nextWeather.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextWeather": () => (/* binding */ getNextWeather),
/* harmony export */   "nextDaysLabel": () => (/* binding */ nextDaysLabel),
/* harmony export */   "nextHoursLabel": () => (/* binding */ nextHoursLabel)
/* harmony export */ });
/* harmony import */ var _supportFun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportFun.js */ "./src/supportFun.js");


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
        (0,_supportFun_js__WEBPACK_IMPORTED_MODULE_0__.formatData)(new Date(weatherData.hourly[i].dt * 1000), timeOffset)
          .hours +
        ":" +
        (0,_supportFun_js__WEBPACK_IMPORTED_MODULE_0__.formatData)(new Date(weatherData.hourly[i].dt * 1000), timeOffset).minutes;

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dFdlYXRoZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ3hDO0FBQzhDO0FBQ0U7QUFDQztBQUNMO0FBQ0E7QUFDQTtBQUNFO0FBQ0k7QUFDRTtBQUNDO0FBQ0w7QUFDQTtBQUNBO0FBQ0U7QUFDbEQ7QUFDQTtBQUNBLFNBQVMsNkNBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrREFBUSxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxtREFBUyxDQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxpREFBTyxDQUFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxpREFBTyxDQUFDO0FBQzNEO0FBQ0E7QUFDQSxtREFBbUQsa0RBQVEsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsaURBQU8sQ0FBQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVMsQ0FBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsaURBQU8sQ0FBQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVUsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscURBQVcsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVMsQ0FBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVMsQ0FBQztBQUM3RDtBQUNBO0FBQ0EsbURBQW1ELHFEQUFVLENBQUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9EQUFTLENBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHVEQUFXLENBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9EQUFTLENBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFZRTtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsSUFBSSxPQUFPLElBQUk7QUFDNUUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3VwcG9ydEZ1bi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbmV4dFdlYXRoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdW5JY29uIGZyb20gXCIuL2Fzc2V0cy9zdW4xLnBuZ1wiO1xyXG5cclxuaW1wb3J0IGRheUNsZWFyIGZyb20gXCIuL2Fzc2V0cy9kYXktY2xlYXIuanBnXCI7XHJcbmltcG9ydCBkYXlDbG91ZHMgZnJvbSBcIi4vYXNzZXRzL2RheS1jbG91ZHMuanBnXCI7XHJcbmltcG9ydCBkYXlEcml6bGUgZnJvbSBcIi4vYXNzZXRzL2RheS1kcml6emxlLmpwZ1wiO1xyXG5pbXBvcnQgZGF5TWlzdCBmcm9tIFwiLi9hc3NldHMvZGF5LW1pc3QuanBnXCI7XHJcbmltcG9ydCBkYXlSYWluIGZyb20gXCIuL2Fzc2V0cy9kYXktcmFpbi5qcGdcIjtcclxuaW1wb3J0IGRheVNub3cgZnJvbSBcIi4vYXNzZXRzL2RheS1zbm93LmdpZlwiO1xyXG5pbXBvcnQgZGF5U3Rvcm0gZnJvbSBcIi4vYXNzZXRzL2RheS1zdG9ybS5qcGdcIjtcclxuaW1wb3J0IG5pZ2h0Q2xlYXIgZnJvbSBcIi4vYXNzZXRzL25pZ2h0LWNsZWFyLmpwZ1wiO1xyXG5pbXBvcnQgbmlnaHRDbG91ZHMgZnJvbSBcIi4vYXNzZXRzL25pZ2h0LWNsb3Vkcy5qcGdcIjtcclxuaW1wb3J0IG5pZ2h0RHJpemxlIGZyb20gXCIuL2Fzc2V0cy9uaWdodC1kcml6emxlLmpwZ1wiO1xyXG5pbXBvcnQgbmlnaHRNaXN0IGZyb20gXCIuL2Fzc2V0cy9uaWdodC1taXN0LmpwZ1wiO1xyXG5pbXBvcnQgbmlnaHRSYWluIGZyb20gXCIuL2Fzc2V0cy9uaWdodC1yYWluLmdpZlwiO1xyXG5pbXBvcnQgbmlnaHRTbm93IGZyb20gXCIuL2Fzc2V0cy9uaWdodC1zbm93LmpwZ1wiO1xyXG5pbXBvcnQgbmlnaHRTdG9ybSBmcm9tIFwiLi9hc3NldHMvbmlnaHQtc3Rvcm0uanBnXCI7XHJcblxyXG5jb25zdCBzdW4xID0gbmV3IEltYWdlKCk7XHJcbnN1bjEuc3JjPXN1bkljb247XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjYW52YXNIdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jb25zdCBjYW52YXNTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuXHJcblxyXG5jYW52YXNIdW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMDBcIik7XHJcbmNhbnZhc0h1bS5jbGFzc0xpc3QuYWRkKFwiY2FudmFzSHVtXCIpO1xyXG5jYW52YXNTdW4uY2xhc3NMaXN0LmFkZChcImNhbnZhc1NcIik7XHJcblxyXG5mdW5jdGlvbiBkcmF3SHVtKGh1bWFkaXR5KSB7XHJcbiAgXHJcbiAgY2FudmFzSHVtLndpZHRoID0gMzAwO1xyXG4gIGNhbnZhc0h1bS5oZWlnaHQgPSAzMDA7XHJcbiAgbGV0IGN0eCA9IGNhbnZhc0h1bS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzSHVtLndpZHRoLGNhbnZhc0h1bS5oZWlnaHQpO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuICBjdHguYXJjKDE1MCwxNTAsNzAsKDEyMCAqIE1hdGguUEkpIC8gMTgwLCg0MjAgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMTUwLCAwKVwiO1xyXG4gIGN0eC5hcmMoMTUwLDE1MCw3MCwoMTIwICogTWF0aC5QSSkgLyAxODAsKCgxMjArKGh1bWFkaXR5LzEwMCkqMzAwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KGh1bWFkaXR5K1wiJVwiLCAxNTAsIDE2NSk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguZm9udCA9IFwiMTJweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KDAsIDEyMCwgMjM4KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIxMnB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHguZmlsbFRleHQoMTAwLCAxODAsIDIzOCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U3VuKHgpIHtcclxuIFxyXG4gIGxldCB5ID0gKHggKiBNYXRoLlBJKSAvIDE4MDtcclxuICBsZXQgYiA9IDE1MCAtIChNYXRoLnNpbih5KSAqIDEwMCk7XHJcbiAgY29uc29sZS5sb2coeCArIFwiIGFiICBcIiArIGIpO1xyXG4gIGxldCBjdHggPSBjYW52YXNTdW4uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzU3VuLndpZHRoLCBjYW52YXNTdW4uaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xyXG4gIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcclxuICBjdHguc2hhZG93Qmx1ciA9IDIwO1xyXG4gIGN0eC5zaGFkb3dDb2xvciA9IFwib3JhbmdlXCI7XHJcblxyXG4gIGN0eC5kcmF3SW1hZ2Uoc3VuMSwgeCoxLjQ1LTIwKzIwLCBiLTIwLCA0MCwgNDApO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgbGV0IHNjYWxlID0gMjA7XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuXHJcbiAgbGV0IHgxID0gLTIwO1xyXG4gIGxldCB5MSA9IDA7XHJcbiAgbGV0IHM7XHJcblxyXG4gIHdoaWxlICh4MSA8IDIwMCkge1xyXG4gICAgcz0gKHgxICogTWF0aC5QSSkgLyAxODBcclxuICAgIHkxID0gMTUwLSBNYXRoLnNpbihzKSoxMDA7XHJcbiAgICBjdHgubGluZVRvKHgxKjEuNDUrMjAsIHkxKTtcclxuICAgIHgxID0geDEgKyAxO1xyXG4gIH1cclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG5cclxufVxyXG5mdW5jdGlvbiBmb3JtYXREYXRhKHgsdCl7XHJcbiAgXHJcbiAgbGV0IGhvdXJzO1xyXG4gIGxldCBtaW51dGVzO1xyXG4gIGxldCB6b25lSG91cnM9eC5nZXRIb3VycygpK3Q7XHJcblxyXG4gIGlmKHpvbmVIb3VycyA+PTI0KXtcclxuICAgIHpvbmVIb3Vycz16b25lSG91cnMgJSAyNDtcclxuICB9XHJcbiAgZWxzZSBpZih6b25lSG91cnM8PTApe1xyXG4gICAgem9uZUhvdXJzPTI0K3pvbmVIb3VycztcclxuICB9XHJcblxyXG4gIGlmICh4IDwgMTApIHtcclxuICAgIGhvdXJzID0gXCIwXCIgKyB6b25lSG91cnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhvdXJzID0gem9uZUhvdXJzO1xyXG4gIH1cclxuICBpZiAoeC5nZXRNaW51dGVzKCkgPCAxMCkge1xyXG4gICAgbWludXRlcyA9IFwiMFwiICsgeC5nZXRNaW51dGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1pbnV0ZXMgPSB4LmdldE1pbnV0ZXMoKTtcclxuICB9XHJcbnJldHVybiB7aG91cnMsbWludXRlc307XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24oYW5nbGUpIHtcclxuICB2YXIgZGlyZWN0aW9ucyA9IFtcclxuICAgIFwiTm9ydGhcIixcclxuICAgIFwiTm9ydGgtRWFzdFwiLFxyXG4gICAgXCJFYXN0XCIsXHJcbiAgICBcIlNvdXRoLUVhc3RcIixcclxuICAgIFwiU291dGhcIixcclxuICAgIFwiU291dGgtV2VzdFwiLFxyXG4gICAgXCJXZXN0XCIsXHJcbiAgICBcIk5vcnRoLVdlc3RcIixcclxuICBdO1xyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoKChhbmdsZSAlPSAzNjApIDwgMCA/IGFuZ2xlICsgMzYwIDogYW5nbGUpIC8gNDUpICUgODtcclxuICByZXR1cm4gZGlyZWN0aW9uc1tpbmRleF07XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoQmFja2dyb3VuZCh4KXtcclxuXHJcbiAgc3dpdGNoICh4KSB7XHJcbiAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5Q2xlYXJ9KWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5Q2xvdWRzfSlgO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXlSYWlufSlgO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXlTbm93fSlgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJUaHVuZGVyc3Rvcm1cIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5U3Rvcm19KWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNaXN0XCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RheU1pc3R9KWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RheURyaXpsZX0pYDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5TWlzdH0pYDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJhY2tncm91bmROaWdodCh4KSB7XHJcbiAgc3dpdGNoICh4KSB7XHJcbiAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bmlnaHRDbGVhcn0pYDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodENsb3Vkc30pYDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIlJhaW5cIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bmlnaHRSYWlufSlgO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodFNub3d9KWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodFN0b3JtfSlgO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiTWlzdFwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodE1pc3R9KWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke25pZ2h0RHJpemxlfSlgO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtuaWdodE1pc3R9KWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBkcmF3SHVtLFxyXG4gIGRyYXdTdW4sXHJcbiAgY2FudmFzSHVtLFxyXG4gIGNhbnZhc1N1bixcclxuICBmb3JtYXREYXRhLFxyXG4gIGdldERpcmVjdGlvbixcclxuICBzd2l0Y2hCYWNrZ3JvdW5kLFxyXG4gIHN3aXRjaEJhY2tncm91bmROaWdodCxcclxuIFxyXG4gXHJcbn07XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtcclxuICBmb3JtYXREYXRhLFxyXG59IGZyb20gXCIuL3N1cHBvcnRGdW4uanNcIjtcclxuXHJcbmNvbnN0IG5leHREYXlzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBuZXh0SG91cnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cclxubmV4dERheXNMYWJlbC5jbGFzc0xpc3QuYWRkKFwibmV4dEVsZW1lbnRzTGFiZWxcIik7XHJcbm5leHREYXlzTGFiZWwuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcclxubmV4dEhvdXJzTGFiZWwuY2xhc3NMaXN0LmFkZChcIm5leHRFbGVtZW50c0xhYmVsXCIpO1xyXG5uZXh0SG91cnNMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcclxuY29uc3QgbW9udGggPSBbXHJcbiAgXCJcIixcclxuICBcIkphbnVhcnlcIixcclxuICBcIkZlYnJ1YXJ5XCIsXHJcbiAgXCJNYXJjaFwiLFxyXG4gIFwiQXByaWxcIixcclxuICBcIk1heVwiLFxyXG4gIFwiSnVuZVwiLFxyXG4gIFwiSnVseVwiLFxyXG4gIFwiQXVndXN0XCIsXHJcbiAgXCJTZXB0ZW1iZXJcIixcclxuICBcIk9jdG9iZXJcIixcclxuICBcIk5vdmVtYmVyXCIsXHJcbiAgXCJEZWNlbWJlclwiLFxyXG5dO1xyXG5leHBvcnQgeyBnZXROZXh0V2VhdGhlciwgbmV4dERheXNMYWJlbCwgbmV4dEhvdXJzTGFiZWwgfTtcclxuXHJcblxyXG5jb25zdCBkZWdyZWVzTU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5jb25zdCBkZXMgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldE5leHRXZWF0aGVyKGxhdCwgbG9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9bWV0cmljJmFwcGlkPTYwNjJlNTMwZGZhZDhiYTkxNmVmMGUxMDU4YjY0MjQzYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBuZXh0RGF5c0xhYmVsLmlubmVySFRNTD1cIlwiO1xyXG4gICAgbmV4dEhvdXJzTGFiZWwuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgICBsZXQgdXRjID0gd2VhdGhlckRhdGEudGltZXpvbmVfb2Zmc2V0O1xyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB0aW1lT2Zmc2V0ID0gdXRjICsgY3VycmVudFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRheUJveFwiKTtcclxuICAgICAgbmV4dERheXNMYWJlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF5RGF0ZVwiKTtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICBtb250aFtuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5kYWlseVtpXS5kdCAqIDEwMDApLmdldE1vbnRoKCldICtcclxuICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgIG5ldyBEYXRlKHdlYXRoZXJEYXRhLmRhaWx5W2ldLmR0ICogMTAwMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkZXMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZGVzLnNyYyA9IGRlcy5zcmMgPVxyXG4gICAgICAgIFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vXCIgK1xyXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbiArXHJcbiAgICAgICAgXCJAMngucG5nXCI7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzKTtcclxuICAgICAgZGVzLmNsYXNzTGlzdC5hZGQoXCJkYXlEZXNcIik7XHJcblxyXG5cclxuICAgICAgY29uc3QgZGVncmVlc01NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRlZ3JlZXNNTSk7XHJcbiAgICAgIGRlZ3JlZXNNTS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0udGVtcC5tYXgudG9GaXhlZCgpICtcclxuICAgICAgICBcIsKwL1wiICtcclxuICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS50ZW1wLm1pbi50b0ZpeGVkKCkgK1xyXG4gICAgICAgIFwiwrBcIjtcclxuICAgICAgZGVncmVlc01NLmNsYXNzTGlzdC5hZGQoXCJkYXlEZWdyZWVzTU1cIik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhvdXJCb3hcIik7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChpKTtcclxuICAgICAgbmV4dEhvdXJzTGFiZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImhvdXJEYXRlXCIpO1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgZm9ybWF0RGF0YShuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5ob3VybHlbaV0uZHQgKiAxMDAwKSwgdGltZU9mZnNldClcclxuICAgICAgICAgIC5ob3VycyArXHJcbiAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgIGZvcm1hdERhdGEobmV3IERhdGUod2VhdGhlckRhdGEuaG91cmx5W2ldLmR0ICogMTAwMCksIHRpbWVPZmZzZXQpLm1pbnV0ZXM7XHJcblxyXG4gICAgICBjb25zdCBkZXMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZGVzLnNyYyA9IGRlcy5zcmMgPVxyXG4gICAgICAgIFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vXCIgK1xyXG4gICAgICAgIHdlYXRoZXJEYXRhLmhvdXJseVtpXS53ZWF0aGVyWzBdLmljb24gK1xyXG4gICAgICAgIFwiQDJ4LnBuZ1wiO1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRlcyk7XHJcbiAgICAgIGRlcy5jbGFzc0xpc3QuYWRkKFwiaG91ckRlc1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVncmVlcyk7XHJcbiAgICAgIGRlZ3JlZXMudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5ob3VybHlbaV0udGVtcC50b0ZpeGVkKCkgKyBcIsKwXCI7XHJcbiAgICAgIGRlZ3JlZXMuY2xhc3NMaXN0LmFkZChcImhvdXJEZWdyZWVzXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldyb25nIHNlYXJjaFwiKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==