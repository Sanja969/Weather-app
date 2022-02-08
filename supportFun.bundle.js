/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/supportFun.js ***!
  \***************************/
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







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydEZ1bi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsc0NBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdXBwb3J0RnVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxyXG5pbXBvcnQgc3VuSWNvbiBmcm9tIFwiLi9zdW4xLnBuZ1wiO1xyXG5cclxuY29uc3Qgc3VuMSA9IG5ldyBJbWFnZSgpO1xyXG5zdW4xLnNyYz1zdW5JY29uO1xyXG5jb25zdCBjYW52YXNIdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jb25zdCBjYW52YXNTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuXHJcblxyXG5jYW52YXNIdW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMDBcIik7XHJcbmNhbnZhc0h1bS5jbGFzc0xpc3QuYWRkKFwiY2FudmFzSHVtXCIpO1xyXG5jYW52YXNTdW4uY2xhc3NMaXN0LmFkZChcImNhbnZhc1NcIik7XHJcblxyXG5mdW5jdGlvbiBkcmF3SHVtKGh1bWFkaXR5KSB7XHJcbiAgXHJcbiAgY2FudmFzSHVtLndpZHRoID0gMzAwO1xyXG4gIGNhbnZhc0h1bS5oZWlnaHQgPSAzMDA7XHJcbiAgbGV0IGN0eCA9IGNhbnZhc0h1bS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzSHVtLndpZHRoLGNhbnZhc0h1bS5oZWlnaHQpO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuICBjdHguYXJjKDE1MCwxNTAsNzAsKDEyMCAqIE1hdGguUEkpIC8gMTgwLCg0MjAgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMTUwLCAwKVwiO1xyXG4gIGN0eC5hcmMoMTUwLDE1MCw3MCwoMTIwICogTWF0aC5QSSkgLyAxODAsKCgxMjArKGh1bWFkaXR5LzEwMCkqMzAwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KGh1bWFkaXR5K1wiJVwiLCAxNTAsIDE2NSk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguZm9udCA9IFwiMTJweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LmZpbGxUZXh0KDAsIDEyMCwgMjM4KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGN0eC5mb250ID0gXCIxMnB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHguZmlsbFRleHQoMTAwLCAxODAsIDIzOCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U3VuKHgpIHtcclxuIFxyXG4gIGxldCB5ID0gKHggKiBNYXRoLlBJKSAvIDE4MDtcclxuICBsZXQgYiA9IDE1MCAtIChNYXRoLnNpbih5KSAqIDEwMCk7XHJcbiAgY29uc29sZS5sb2coeCArIFwiIGFiICBcIiArIGIpO1xyXG4gIGxldCBjdHggPSBjYW52YXNTdW4uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzU3VuLndpZHRoLCBjYW52YXNTdW4uaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xyXG4gIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcclxuICBjdHguc2hhZG93Qmx1ciA9IDIwO1xyXG4gIGN0eC5zaGFkb3dDb2xvciA9IFwib3JhbmdlXCI7XHJcblxyXG4gIGN0eC5kcmF3SW1hZ2Uoc3VuMSwgeCoxLjQ1LTIwKzIwLCBiLTIwLCA0MCwgNDApO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgbGV0IHNjYWxlID0gMjA7XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIwMCwgMTUzLCA2MCwgMC4wOClcIjtcclxuXHJcbiAgbGV0IHgxID0gLTIwO1xyXG4gIGxldCB5MSA9IDA7XHJcbiAgbGV0IHM7XHJcblxyXG4gIHdoaWxlICh4MSA8IDIwMCkge1xyXG4gICAgcz0gKHgxICogTWF0aC5QSSkgLyAxODBcclxuICAgIHkxID0gMTUwLSBNYXRoLnNpbihzKSoxMDA7XHJcbiAgICBjdHgubGluZVRvKHgxKjEuNDUrMjAsIHkxKTtcclxuICAgIHgxID0geDEgKyAxO1xyXG4gIH1cclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG5cclxufVxyXG5mdW5jdGlvbiBmb3JtYXREYXRhKHgsdCl7XHJcbiAgXHJcbiAgbGV0IGhvdXJzO1xyXG4gIGxldCBtaW51dGVzO1xyXG4gIGxldCB6b25lSG91cnM9eC5nZXRIb3VycygpK3Q7XHJcblxyXG4gIGlmKHpvbmVIb3VycyA+PTI0KXtcclxuICAgIHpvbmVIb3Vycz16b25lSG91cnMgJSAyNDtcclxuICB9XHJcbiAgZWxzZSBpZih6b25lSG91cnM8PTApe1xyXG4gICAgem9uZUhvdXJzPTI0K3pvbmVIb3VycztcclxuICB9XHJcblxyXG4gIGlmICh4IDwgMTApIHtcclxuICAgIGhvdXJzID0gXCIwXCIgKyB6b25lSG91cnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhvdXJzID0gem9uZUhvdXJzO1xyXG4gIH1cclxuICBpZiAoeC5nZXRNaW51dGVzKCkgPCAxMCkge1xyXG4gICAgbWludXRlcyA9IFwiMFwiICsgeC5nZXRNaW51dGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1pbnV0ZXMgPSB4LmdldE1pbnV0ZXMoKTtcclxuICB9XHJcbnJldHVybiB7aG91cnMsbWludXRlc307XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24oYW5nbGUpIHtcclxuICB2YXIgZGlyZWN0aW9ucyA9IFtcclxuICAgIFwiTm9ydGhcIixcclxuICAgIFwiTm9ydGgtRWFzdFwiLFxyXG4gICAgXCJFYXN0XCIsXHJcbiAgICBcIlNvdXRoLUVhc3RcIixcclxuICAgIFwiU291dGhcIixcclxuICAgIFwiU291dGgtV2VzdFwiLFxyXG4gICAgXCJXZXN0XCIsXHJcbiAgICBcIk5vcnRoLVdlc3RcIixcclxuICBdO1xyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoKChhbmdsZSAlPSAzNjApIDwgMCA/IGFuZ2xlICsgMzYwIDogYW5nbGUpIC8gNDUpICUgODtcclxuICByZXR1cm4gZGlyZWN0aW9uc1tpbmRleF07XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoQmFja2dyb3VuZCh4KXtcclxuXHJcbiAgc3dpdGNoICh4KSB7XHJcbiAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA4LzA2LzIyLzU1L3N1bi0zNTg4NjE4Xzk2MF83MjAuanBnXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDUvMTkvMjMvNDcvY2xvdWRzLTQyMTU2MDhfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzExLzA4LzA1LzI2L3dvbWFuLTE4MDc1MzNfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTUvZTgvMmQvOTVlODJkMzExYTljNThkM2Y1ZTc1OGMxZDQ3MmY5OTQuZ2lmXCIpJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiVGh1bmRlcnN0b3JtXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDEvMjIvMjMvMDYvZmxhc2gtMTE1NjgyMl85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNaXN0XCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDQvMjAvMTkvNDcvd29sdmVzLTEzNDE4ODFfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8xMC8zMC8yMS81My9nb2RzLWdpZnQtNDU5MDY0OF85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wNC8yMC8xOS80Ny93b2x2ZXMtMTM0MTg4MV85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hCYWNrZ3JvdW5kTmlnaHQoeCkge1xyXG4gIHN3aXRjaCAoeCkge1xyXG4gICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9hLnJnYmltZy5jb20vdXNlcnMvdy93ZS93ZWlyZHZpcy82MDAvbWVTYk5hVS5qcGdcIik7JztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vd3d3LnBpeGVsc3RhbGsubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL05pZ2h0LUNsb3VkLVdhbGxwYXBlci1mcmVlLWRvd25sb2FkLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDgvMDYvMDYvMTgvcmFpbi0yNTg5NDE3Xzk2MF83MjAuanBnXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIlNub3dcIjpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2NkbjUudmVjdG9yc3RvY2suY29tL2kvMTAwMHgxMDAwLzA0LzY0L3dpbnRlci1zbm93ZmFsbC1hbmQtY2hyaXN0bWFzLXNub3d5LWhpbGwtdmVjdG9yLTI4MDcwNDY0LmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgJ3VybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDgvMDEvMjIvMzgvZmxhc2gtMjU2ODM4MV85NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNaXN0XCI6XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAndXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wMS8yOS8xOS8wMC9wYXJrLTMxMTY4ODNfOTYwXzcyMC5qcGdcIiknO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNTIvNDYvMmEvNTI0NjJhOWY1N2RhZDkxYzdkODAzODRiZjczNzM0NmMuZ2lmXCIpJztcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICd1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzAxLzI5LzE5LzAwL3BhcmstMzExNjg4M185NjBfNzIwLmpwZ1wiKSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBkcmF3SHVtLFxyXG4gIGRyYXdTdW4sXHJcbiAgY2FudmFzSHVtLFxyXG4gIGNhbnZhc1N1bixcclxuICBmb3JtYXREYXRhLFxyXG4gIGdldERpcmVjdGlvbixcclxuICBzd2l0Y2hCYWNrZ3JvdW5kLFxyXG4gIHN3aXRjaEJhY2tncm91bmROaWdodCxcclxuIFxyXG4gXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=