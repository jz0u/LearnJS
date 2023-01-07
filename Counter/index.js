let count = 0;

document.getElementById("decreaseButt").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseButt").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButt").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}