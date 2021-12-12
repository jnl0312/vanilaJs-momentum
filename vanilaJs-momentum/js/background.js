const images = [
    "0.jpg", "1.jpg", "2.jpg"
];


const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;


// 아직은 js에만 존재
bgImage.style.width = "500px";
bgImage.style.height = "400px";
// html document에 추가

// document.body.appendChild(bgImage);

body.style.backgroundImage = "url('" + `${bgImage.src}` + "')";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
body.style.height = "100%";