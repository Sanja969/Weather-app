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
/* harmony import */ var _sun1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sun1.png */ "./src/sun1.png");



const sun1 = new Image();
sun1.src=_sun1_png__WEBPACK_IMPORTED_MODULE_0__;
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
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg")';
      break;

    case "Clouds":
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_960_720.jpg")';
      break;

    case "Rain":
      document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_960_720.jpg")';
      break;

    case "Snow":
      document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/95/e8/2d/95e82d311a9c58d3f5e758c1d472f994.gif")';
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/01/22/23/06/flash-1156822_960_720.jpg")';
      break;

    case "Mist":
      document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881_960_720.jpg")';
      break;

    case "Drizzle":
      document.body.style.backgroundImage =
       'url("https://cdn.pixabay.com/photo/2019/10/30/21/53/gods-gift-4590648_960_720.jpg")';
      break;

    default:
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881_960_720.jpg")';
      break;

  }

}

function switchBackgroundNight(x) {
  switch (x) {
    case "Clear":
      document.body.style.backgroundImage =
        'url("https://a.rgbimg.com/users/w/we/weirdvis/600/meSbNaU.jpg");';
      break;

    case "Clouds":
      document.body.style.backgroundImage =
        'url("https://www.pixelstalk.net/wp-content/uploads/2016/03/Night-Cloud-Wallpaper-free-download.jpg")';
      break;

    case "Rain":
      document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/08/06/06/18/rain-2589417_960_720.jpg")';
      break;

    case "Snow":
      document.body.style.backgroundImage =
        'url("https://cdn5.vectorstock.com/i/1000x1000/04/64/winter-snowfall-and-christmas-snowy-hill-vector-28070464.jpg")';
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381_960_720.jpg")';
      break;

    case "Mist":
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg")';
      break;

    case "Drizzle":
      document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/52/46/2a/52462a9f57dad91c7d80384bf737346c.gif")';
      break;

    default:
      document.body.style.backgroundImage =
        'url("https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg")';
      break;
  }
}








/***/ }),

/***/ "./src/sun1.png":
/*!**********************!*\
  !*** ./src/sun1.png ***!
  \**********************/
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
//   try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=6062e530dfad8ba916ef0e1058b64243`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
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
    // }
//   } catch (err) {
//     console.log("Wrong search");
//   }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDZEQUE2RCxJQUFJLE9BQU8sSUFBSTtBQUM1RSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N1cHBvcnRGdW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL25leHRXZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3VuSWNvbiBmcm9tIFwiLi9zdW4xLnBuZ1wiO1xyXG5cclxuY29uc3Qgc3VuMSA9IG5ldyBJbWFnZSgpO1xyXG5zdW4xLnNyYz1zdW5JY29uO1xyXG5jb25zdCBjYW52YXNIdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jb25zdCBjYW52YXNTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuXHJcblxyXG5jYW52YXNIdW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMDBcIik7XHJcbmNhbnZhc0h1bS5jbGFzc0xpc3QuYWRkKFwiY2FudmFzSHVtXCIpO1xyXG5jYW52YXNTdW4uY2xhc3NMaXN0LmFkZChcImNhbnZhc1NcIik7XHJcblxyXG5mdW5jdGlvbiBkcmF3SHVtKGh1bWFkaXR5KSB7XHJcbiAgXHJcbiAgY2FudmFzSHVtLndpZHRoID0gMzAwO1xyXG4gIGNhbnZhc0h1bS5oZWlnaHQgPSAzMDA7XHJcbiAgbGV0IGN0eCA9IGNhbnZhc0h1bS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzSHVtLndpZHRoLGNhbnZhc0h1bS5oZWlnaHQpO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuICBjdHguYXJjKDE1MCwxNTAsNzAsKDEyMCAqIE1hdGguUEkpIC8gMTgwLCg0MjAgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMTUwLCAwKVwiO1xyXG4gIGN0eC5hcmMoMTUwLDE1MCw3MCwoMTIwICogTWF0aC5QSSkgLyAxODAsKCgxMjArKGh1bWFkaXR5LzEwMCkqMzAwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KGh1bWFkaXR5K1wiJVwiLCAxNTAsIDE2NSk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguZm9udCA9IFwiMTJweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KDAsIDEyMCwgMjM4KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIxMnB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHguZmlsbFRleHQoMTAwLCAxODAsIDIzOCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U3VuKHgpIHtcclxuIFxyXG4gIGxldCB5ID0gKHggKiBNYXRoLlBJKSAvIDE4MDtcclxuICBsZXQgYiA9IDE1MCAtIChNYXRoLnNpbih5KSAqIDEwMCk7XHJcbiAgY29uc29sZS5sb2coeCArIFwiIGFiICBcIiArIGIpO1xyXG4gIGxldCBjdHggPSBjYW52YXNTdW4uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzU3VuLndpZHRoLCBjYW52YXNTdW4uaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xyXG4gIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcclxuICBjdHguc2hhZG93Qmx1ciA9IDIwO1xyXG4gIGN0eC5zaGFkb3dDb2xvciA9IFwib3JhbmdlXCI7XHJcblxyXG4gIGN0eC5kcmF3SW1hZ2Uoc3VuMSwgeCoxLjQ1LTIwKzIwLCBiLTIwLCA0MCwgNDApO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgbGV0IHNjYWxlID0gMjA7XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuXHJcbiAgbGV0IHgxID0gLTIwO1xyXG4gIGxldCB5MSA9IDA7XHJcbiAgbGV0IHM7XHJcblxyXG4gIHdoaWxlICh4MSA8IDIwMCkge1xyXG4gICAgcz0gKHgxICogTWF0aC5QSSkgLyAxODBcclxuICAgIHkxID0gMTUwLSBNYXRoLnNpbihzKSoxMDA7XHJcbiAgICBjdHgubGluZVRvKHgxKjEuNDUrMjAsIHkxKTtcclxuICAgIHgxID0geDEgKyAxO1xyXG4gIH1cclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG5cclxufVxyXG5mdW5jdGlvbiBmb3JtYXREYXRhKHgsdCl7XHJcbiAgXHJcbiAgbGV0IGhvdXJzO1xyXG4gIGxldCBtaW51dGVzO1xyXG4gIGxldCB6b25lSG91cnM9eC5nZXRIb3VycygpK3Q7XHJcblxyXG4gIGlmKHpvbmVIb3VycyA+PTI0KXtcclxuICAgIHpvbmVIb3Vycz16b25lSG91cnMgJSAyNDtcclxuICB9XHJcbiAgZWxzZSBpZih6b25lSG91cnM8PTApe1xyXG4gICAgem9uZUhvdXJzPTI0K3pvbmVIb3VycztcclxuICB9XHJcblxyXG4gIGlmICh4IDwgMTApIHtcclxuICAgIGhvdXJzID0gXCIwXCIgKyB6b25lSG91cnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhvdXJzID0gem9uZUhvdXJzO1xyXG4gIH1cclxuICBpZiAoeC5nZXRNaW51dGVzKCkgPCAxMCkge1xyXG4gICAgbWludXRlcyA9IFwiMFwiICsgeC5nZXRNaW51dGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1pbnV0ZXMgPSB4LmdldE1pbnV0ZXMoKTtcclxuICB9XHJcbnJldHVybiB7aG91cnMsbWludXRlc307XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24oYW5nbGUpIHtcclxuICB2YXIgZGlyZWN0aW9ucyA9IFtcclxuICAgIFwiTm9ydGhcIixcclxuICAgIFwiTm9ydGgtRWFzdFwiLFxyXG4gICAgXCJFYXN0XCIsXHJcbiAgICBcIlNvdXRoLUVhc3RcIixcclxuICAgIFwiU291dGhcIixcclxuICAgIFwiU291dGgtV2VzdFwiLFxyXG4gICAgXCJXZXN0XCIsXHJcbiAgICBcIk5vcnRoLVdlc3RcIixcclxuICBdO1xyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoKChhbmdsZSAlPSAzNjApIDwgMCA/IGFuZ2xlICsgMzYwIDogYW5nbGUpIC8gNDUpICUgODtcclxuICByZXR1cm4gZGlyZWN0aW9uc1tpbmRleF07XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoQmFja2dyb3VuZCh4KXtcclxuXHJcbiAgc3dpdGNoICh4KSB7XHJcbiAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA4LzA2LzIyLzU1L3N1bi0zNTg4NjE4Xzk2MF83MjAuanBnXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDUvMTkvMjMvNDcvY2xvdWRzLTQyMTU2MDhfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzExLzA4LzA1LzI2L3dvbWFuLTE4MDc1MzNfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTUvZTgvMmQvOTVlODJkMzExYTljNThkM2Y1ZTc1OGMxZDQ3MmY5OTQuZ2lmXCIpJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiVGh1bmRlcnN0b3JtXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDEvMjIvMjMvMDYvZmxhc2gtMTE1NjgyMl85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNaXN0XCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDQvMjAvMTkvNDcvd29sdmVzLTEzNDE4ODFfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8xMC8zMC8yMS81My9nb2RzLWdpZnQtNDU5MDY0OF85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wNC8yMC8xOS80Ny93b2x2ZXMtMTM0MTg4MV85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hCYWNrZ3JvdW5kTmlnaHQoeCkge1xyXG4gIHN3aXRjaCAoeCkge1xyXG4gICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9hLnJnYmltZy5jb20vdXNlcnMvdy93ZS93ZWlyZHZpcy82MDAvbWVTYk5hVS5qcGdcIik7JztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vd3d3LnBpeGVsc3RhbGsubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL05pZ2h0LUNsb3VkLVdhbGxwYXBlci1mcmVlLWRvd25sb2FkLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDgvMDYvMDYvMTgvcmFpbi0yNTg5NDE3Xzk2MF83MjAuanBnXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIlNub3dcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2NkbjUudmVjdG9yc3RvY2suY29tL2kvMTAwMHgxMDAwLzA0LzY0L3dpbnRlci1zbm93ZmFsbC1hbmQtY2hyaXN0bWFzLXNub3d5LWhpbGwtdmVjdG9yLTI4MDcwNDY0LmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDgvMDEvMjIvMzgvZmxhc2gtMjU2ODM4MV85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNaXN0XCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wMS8yOS8xOS8wMC9wYXJrLTMxMTY4ODNfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNTIvNDYvMmEvNTI0NjJhOWY1N2RhZDkxYzdkODAzODRiZjczNzM0NmMuZ2lmXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzAxLzI5LzE5LzAwL3BhcmstMzExNjg4M185NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBkcmF3SHVtLFxyXG4gIGRyYXdTdW4sXHJcbiAgY2FudmFzSHVtLFxyXG4gIGNhbnZhc1N1bixcclxuICBmb3JtYXREYXRhLFxyXG4gIGdldERpcmVjdGlvbixcclxuICBzd2l0Y2hCYWNrZ3JvdW5kLFxyXG4gIHN3aXRjaEJhY2tncm91bmROaWdodCxcclxuIFxyXG4gXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge1xyXG4gIGZvcm1hdERhdGEsXHJcbn0gZnJvbSBcIi4vc3VwcG9ydEZ1bi5qc1wiO1xyXG5cclxuY29uc3QgbmV4dERheXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5leHRIb3Vyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblxyXG5uZXh0RGF5c0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJuZXh0RWxlbWVudHNMYWJlbFwiKTtcclxubmV4dERheXNMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xyXG5uZXh0SG91cnNMYWJlbC5jbGFzc0xpc3QuYWRkKFwibmV4dEVsZW1lbnRzTGFiZWxcIik7XHJcbm5leHRIb3Vyc0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJob3VyXCIpO1xyXG5jb25zdCBtb250aCA9IFtcclxuICBcIlwiLFxyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmV4cG9ydCB7IGdldE5leHRXZWF0aGVyLCBuZXh0RGF5c0xhYmVsLCBuZXh0SG91cnNMYWJlbCB9O1xyXG5cclxuXHJcbmNvbnN0IGRlZ3JlZXNNTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmNvbnN0IGRlcyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dFdlYXRoZXIobGF0LCBsb24pIHtcclxuLy8gICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9NjA2MmU1MzBkZmFkOGJhOTE2ZWYwZTEwNThiNjQyNDNgLFxyXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICAgIGxldCB1dGMgPSB3ZWF0aGVyRGF0YS50aW1lem9uZV9vZmZzZXQ7XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRpbWVPZmZzZXQgPSB1dGMgKyBjdXJyZW50VGltZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF5Qm94XCIpO1xyXG4gICAgICBuZXh0RGF5c0xhYmVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXlEYXRlXCIpO1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IFwiVG9tb3Jyb3dcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID1cclxuICAgICAgICAgIG1vbnRoW25ldyBEYXRlKHdlYXRoZXJEYXRhLmRhaWx5W2ldLmR0ICogMTAwMCkuZ2V0TW9udGgoKV0gK1xyXG4gICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgbmV3IERhdGUod2VhdGhlckRhdGEuZGFpbHlbaV0uZHQgKiAxMDAwKS5nZXREYXRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRlcyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBkZXMuc3JjID0gZGVzLnNyYyA9XHJcbiAgICAgICAgXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi9cIiArXHJcbiAgICAgICAgd2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5pY29uICtcclxuICAgICAgICBcIkAyeC5wbmdcIjtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZXMpO1xyXG4gICAgICBkZXMuY2xhc3NMaXN0LmFkZChcImRheURlc1wiKTtcclxuXHJcblxyXG4gICAgICBjb25zdCBkZWdyZWVzTU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVncmVlc01NKTtcclxuICAgICAgZGVncmVlc01NLnRleHRDb250ZW50ID1cclxuICAgICAgICB3ZWF0aGVyRGF0YS5kYWlseVtpXS50ZW1wLm1heC50b0ZpeGVkKCkgK1xyXG4gICAgICAgIFwiwrAvXCIgK1xyXG4gICAgICAgIHdlYXRoZXJEYXRhLmRhaWx5W2ldLnRlbXAubWluLnRvRml4ZWQoKSArXHJcbiAgICAgICAgXCLCsFwiO1xyXG4gICAgICBkZWdyZWVzTU0uY2xhc3NMaXN0LmFkZChcImRheURlZ3JlZXNNTVwiKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaG91ckJveFwiKTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGkpO1xyXG4gICAgICBuZXh0SG91cnNMYWJlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaG91ckRhdGVcIik7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gICAgICBkYXRlLnRleHRDb250ZW50ID1cclxuICAgICAgICBmb3JtYXREYXRhKG5ldyBEYXRlKHdlYXRoZXJEYXRhLmhvdXJseVtpXS5kdCAqIDEwMDApLCB0aW1lT2Zmc2V0KVxyXG4gICAgICAgICAgLmhvdXJzICtcclxuICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgZm9ybWF0RGF0YShuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5ob3VybHlbaV0uZHQgKiAxMDAwKSwgdGltZU9mZnNldCkubWludXRlcztcclxuXHJcbiAgICAgIGNvbnN0IGRlcyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBkZXMuc3JjID0gZGVzLnNyYyA9XHJcbiAgICAgICAgXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi9cIiArXHJcbiAgICAgICAgd2VhdGhlckRhdGEuaG91cmx5W2ldLndlYXRoZXJbMF0uaWNvbiArXHJcbiAgICAgICAgXCJAMngucG5nXCI7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzKTtcclxuICAgICAgZGVzLmNsYXNzTGlzdC5hZGQoXCJob3VyRGVzXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZWdyZWVzKTtcclxuICAgICAgZGVncmVlcy50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmhvdXJseVtpXS50ZW1wLnRvRml4ZWQoKSArIFwiwrBcIjtcclxuICAgICAgZGVncmVlcy5jbGFzc0xpc3QuYWRkKFwiaG91ckRlZ3JlZXNcIik7XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIldyb25nIHNlYXJjaFwiKTtcclxuLy8gICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==