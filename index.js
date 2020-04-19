var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImgs="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImgs);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImgs2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImgs2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="shaka wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="someoneelse but still shaka wins"
}else{
    document.querySelector("h1").innerHTML="it's a draw but shaka find way to win again"
}