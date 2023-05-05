const background = document.querySelector(".container");
const text = document.getElementById("text");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//let delta = 0;
//const words = ["LIVE","KILL UR SELF","FORGIVE","KILL","CRY","NEVERMIND","FORGET"]

setInterval(() => {
   background.classList.toggle("dark")
   //delta += 1
   //   if(delta >= words.length){
   //   delta = 0
   //}
   //text.innerText = words[delta]

   text.innerText = text.innerText.split("").map((letter, index) => {
      return letters[Math.floor(Math.random() * 26)]
   }).join("")
}, 30)