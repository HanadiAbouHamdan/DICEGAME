

var button1=document.getElementById('btn1');
var heading=document.getElementById("myHeading");


var dicepic=["img/Dice1.png","img/Dice2.png","img/Dice3.png","img/Dice4.png","img/Dice5.png","img/Dice6.png"];//initializing array


function play(){


var randompic1= Math.floor(Math.random() * dicepic.length);//index
console.log(randompic1);
var randompic2=Math.floor(Math.random() * dicepic.length);//index
console.log(randompic1,randompic2);

var t1=document.getElementsByTagName("img")[0];
t1.setAttribute("src",dicepic[randompic1]);

var t2=document.getElementsByTagName("img")[1];
t2.setAttribute("src",dicepic[randompic2]);


if(randompic1>randompic2){
//heading.innerHTML="Player 1 wins!";
console.log("player 1 wins")
}
else{if (randompic1<randompic2){
  //heading.textContent="Player 2 wins!";
  console.log("player 2 wins")
}
else{
 //heading.textContent="No one wins";
 console.log("No one wins");
}}
button1.textContent="Try Again!";
}

