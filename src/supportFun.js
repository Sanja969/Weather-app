
import sunIcon from "./sun1.png";

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




