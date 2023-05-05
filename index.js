const background = document.querySelector(".container");
const text = document.getElementById("text");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

setInterval(() => {
   background.classList.toggle("dark")

   text.innerText = text.innerText.split("").map((letter, index) => {
      return letters[Math.floor(Math.random() * 26)]
   }).join("")
}, 30)