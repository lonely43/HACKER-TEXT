const background = document.querySelector(".container");
const text = document.getElementById("text");

let delta = 0;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const words = ["LIVE","KILL UR SELF","FORGIVE","KILL","CRY","NEVERMIND","FORGET"]

setInterval(() => {
   background.classList.toggle("dark")
   delta += 1
   //text.innerText = text.innerText.split("").map((i) => {
   //   return letters[Math.floor(Math.random() * 26)]
   //}).join("")

   if(delta >= words.length){
      delta = 0
   }
   text.innerText = words[delta]
}, 80)