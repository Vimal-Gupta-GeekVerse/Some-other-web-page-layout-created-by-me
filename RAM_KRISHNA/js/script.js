const pre= document.querySelector(".mouse");

const absolute= document.querySelector(".absolute");
const pic= document.querySelector(".outerimg");

pre.addEventListener("mousemove",(e)=>{
    moveElement1(e, absolute, pic);
    });

function moveElement1 (e, absolute, pic){

    const x=e.clientX;
  

    const middleX = window.innerWidth/2;
  

     const offsetX=((x-middleX)/middleX)*100;
 

absolute.style.left = `${offsetX*-1 +50}%`;
if(offsetX*-1<0){
    absolute.style.left = `max(${offsetX*-1 +50}%, 0%)`; 
}

pic.style.left = `${offsetX}%`;
if(offsetX>50){
    pic.style.left = `min(${offsetX}%, 50%)`; 
}

}

pre.addEventListener("mouseout",(e)=>{
    moveDefault(e, absolute, pic);
    });

function moveDefault (e, absolute, pic){
    absolute.style.left = `50%`; 
    pic.style.left = `0%`; 
}