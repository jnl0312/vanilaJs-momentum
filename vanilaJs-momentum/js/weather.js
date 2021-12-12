// navigator
// 브라우저에서 위치 좌표를 준다.
// getCurrentPosition()은 2개의 argument가 필요하다.
// 1. 모든 것이 잘 실행 될 때
// 2. 에러 발생 시 실행할 함수

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const WEATHER_KEY = "key값";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&unitx=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    })
}

function onGeoError() {
    alert("Can't find wyou. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
