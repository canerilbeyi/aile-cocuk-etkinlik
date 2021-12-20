const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");
const sliderButton = document.querySelectorAll(".slider-button");
const cards = document.querySelector(".cards");
navBtn.addEventListener("click", () => {
  sideBar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
sliderButton.forEach(function (item,index) {
  console.log(index);
  item.addEventListener("click", function (e) {
    sliderButton.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    cards.style.left = `-${index*100}%`;
  });
});


