import configImage from "./ImageCarousel/Images";

const container = document.getElementById("container");

const app = document.getElementById("app");

let ind = 0,
  len = configImage.length;

//by default
const img = document.createElement("img");
img.src = configImage[0];
img.className = "img";

container.appendChild(img);

app.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  if (event.target.value == "<") {
    ind = (ind - 1 + len) % len;
    img.src = configImage[ind];
  } else {
    ind = (ind + 1) % len;
    img.src = configImage[ind];
  }
});
