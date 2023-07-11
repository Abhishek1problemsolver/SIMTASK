//SELECTOR
let c1 =document.querySelector(".c1");
let c2= document.querySelector(".c2");
let css = document.querySelector("h3");
let body = document.getElementById("Background");

//function

function gradiantChange(){
    body.style.background ="linear-gradient(to right ,"+
    c1.value+ "," + c2.value + ")" ;
    css.textContent = body.style.background+ ";";

}

//add event listener comment

c1.addEventListener("input", gradiantChange);
c2.addEventListener("input", gradiantChange);