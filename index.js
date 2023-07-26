const home=document.querySelector(".gohome__btn");
const back=document.querySelector(".goback__btn");

home.addEventListener("click", ()=>{
    alert("Gotcha! You're stuck here indefinitely forever. HA!");
})

back.addEventListener("click", ()=>{
    alert("No, I lied, you can't go back");
})

