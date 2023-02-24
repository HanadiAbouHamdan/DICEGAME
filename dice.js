var button=document.getElementsByClassName('btn');
var txt=doxument.getElementsByClassName('header');








if (dice1>dice2){
    txt.textContent="Player 1 wins!"
}
else if (dice1==dice2){
    txt.textContent="No one wins";
}
else{
    txt.textContent="Player 2 wins";
}