const lirePlus1 = document.querySelector(".lirePlus1");
const lirePlus2 = document.querySelector(".lirePlus2");
const lirePlus3 = document.querySelector(".lirePlus3");
const lirePlus4 = document.querySelector(".lirePlus4");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");

lirePlus1.addEventListener("click", () => {
  text1.classList.toggle("textPlus");
});
lirePlus2.addEventListener("click", () => {
  text2.classList.toggle("textPlus");
});
lirePlus3.addEventListener("click", () => {
  text3.classList.toggle("textPlus");
});
lirePlus4.addEventListener("click", () => {
  text4.classList.toggle("textPlus");
});
