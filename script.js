function makeBubble(){
    var clutter = "";
for (var i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random()*15)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter

}
makeBubble()

var timer = 60;
function runtimer(){


    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint)
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;

    }
    },1000)
}
runtimer()

var hitrn;
function getNewHit(){
    hitrn = Math.floor(Math.random()*15)
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit()


var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent)
    if(clickednum === hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})
