var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var str1  = "dice"+randomNumber1+".png";
var str2  = "dice"+randomNumber2+".png";

var randomImageSource1 = "images/" + str1;
var randomImageSource2= "images/" + str2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);// 1st way

document.querySelector(".img2").setAttribute("src",randomImageSource2); //2nd way


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}