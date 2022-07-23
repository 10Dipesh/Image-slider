const carasolSlide = document.querySelector(".slider");
const carasolImages = document.querySelectorAll(".slider img");

// button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
var size = carasolImages[0].clientWidth;
carasolSlide.style.transform = "translateX( " + -size * counter + "px)";

//button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carasolImages.length - 1) return;
  carasolSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carasolSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  carasolSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carasolSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carasolSlide.addEventListener("transitionend", () => {
  if (carasolImages[counter].id === "lastclone") {
    carasolSlide.style.transition = "none";
    counter = carasolImages.length - 2;
    carasolSlide.style.transform = "translateX( " + -size * counter + "px)";
  }
  if (carasolImages[counter].id === "firstclone") {
    carasolSlide.style.transition = "none";
    counter = carasolImages.length - counter;
    carasolSlide.style.transform = "translateX( " + -size * counter + "px)";
  }
});
