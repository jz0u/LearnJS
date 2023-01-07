randomNumber = Math.floor(Math.random()* 6+1);//1-6;
document.getElementById("randNumber").innerHTML = randomNumber;

document.getElementById("rerollButt").onclick = function(){

    randomNumber = Math.floor(Math.random()* 6+1);//1-6

    document.getElementById("randNumber").innerHTML = randomNumber;

}
