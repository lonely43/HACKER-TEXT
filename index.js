const background = document.querySelector(".container");
const text = document.getElementById("text");

let delta = 0;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const words = ["LIVE","KILL UR SELF","FORGIVE","KILL","CRY","NEVERMIND","FORGET"]

setInterval(() => {
   background.classList.toggle("dark")
   delta += 1

   if(delta >= words.length){
      delta = 0
   }
   text.innerText = words[delta]
}, 80)