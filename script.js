const buyButton = document.getElementById("buy");
const buyText = document.getElementById("lion");
const tinyText = document.getElementById("tiny");

buyButton.addEventListener("mouseover", function(){
    document.getElementById("lion").style.color = "#0a2351";
    tinyText.style.opacity = "1"
})
buyButton.addEventListener("mouseout", function(){
    document.getElementById("lion").style.color = "white";
    tinyText.style.opacity = "0"
})