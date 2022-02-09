
import sunIcon from "./assets/sun1.png";

import dayClear from "./assets/day-clear.jpg";
import dayClouds from "./assets/day-clouds.jpg";
import dayDrizle from "./assets/day-drizzle.jpg";
import dayMist from "./assets/day-mist.jpg";
import dayRain from "./assets/day-rain.jpg";
import daySnow from "./assets/day-snow.gif";
import dayStorm from "./assets/day-storm.jpg";
import nightClear from "./assets/night-clear.jpg";
import nightClouds from "./assets/night-clouds.jpg";
import nightDrizle from "./assets/night-drizzle.jpg";
import nightMist from "./assets/night-mist.jpg";
import nightRain from "./assets/night-rain.gif";
import nightSnow from "./assets/night-snow.jpg";
import nightStorm from "./assets/night-storm.jpg";

const sun1 = new Image();
sun1.src=sunIcon;




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

  ctx.drawImage(sun1, x*1.45-20+10, b-20, 40, 40);
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
    ctx.lineTo(x1*1.45+10, y1);
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

  if (zoneHours < 10) {
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
      document.body.style.backgroundImage = `url(${dayClear})`;
      break;

    case "Clouds":
      document.body.style.backgroundImage = `url(${dayClouds})`;
      break;

    case "Rain":
      document.body.style.backgroundImage = `url(${dayRain})`;
      break;

    case "Snow":
      document.body.style.backgroundImage = `url(${daySnow})`;
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = `url(${dayStorm})`;
      break;

    case "Mist":
      document.body.style.backgroundImage = `url(${dayMist})`;
      break;

    case "Drizzle":
      document.body.style.backgroundImage = `url(${dayDrizle})`;
      break;

    default:
      document.body.style.backgroundImage = `url(${dayMist})`;
      break;

  }

}

function switchBackgroundNight(x) {
  switch (x) {
    case "Clear":
      document.body.style.backgroundImage = `url(${nightClear})`;
      break;

    case "Clouds":
      document.body.style.backgroundImage = `url(${nightClouds})`;
      break;

    case "Rain":
      document.body.style.backgroundImage = `url(${nightRain})`;
      break;

    case "Snow":
      document.body.style.backgroundImage = `url(${nightSnow})`;
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = `url(${nightStorm})`;
      break;

    case "Mist":
      document.body.style.backgroundImage = `url(${nightMist})`;
      break;

    case "Drizzle":
      document.body.style.backgroundImage = `url(${nightDrizle})`;
      break;

    default:
      document.body.style.backgroundImage = `url(${nightMist})`;
      break;
  }
}

export {
  drawHum,
  drawSun,
  canvasHum,
  canvasSun,
  formatData,
  getDirection,
  switchBackground,
  switchBackgroundNight,
 
 
};


