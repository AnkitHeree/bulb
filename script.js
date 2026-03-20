var a = document.querySelector("h3")
var bulb=document.querySelector("#child")
var container = document.querySelector("#container")
var flag = 0

 var btn = document.querySelector("#btn")

 btn.addEventListener("click", function(){

if(flag===0){
 container.style.backgroundColor="white"
    a.innerHTML="bulb is On"
    btn.innerHTML="OFF"
bulb.style.backgroundColor="Yellow"
flag = 1
   }

else{
 container.style.backgroundColor="black"
a.innerHTML="bulb is off"
btn.innerHTML="On";
bulb.style.backgroundColor="white"
flag = 0
  }
})
