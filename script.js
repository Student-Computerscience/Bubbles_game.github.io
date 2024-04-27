let timer = 60;
let score = 0;
let hitren = 0;

function increasScore(){
    score += 10;
    document.querySelector("#scorevel").textContent = score;
}

function getNewHit(){
    hitren = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitren;
}
function makeBubble(){
    let clutter = "";

for(let i=1; i<=200; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".c-btm").innerHTML = clutter;
}

function runtime(){
    let timerint = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timervel").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".c-btm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector(".c-btm").addEventListener("click", function(dets){
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitren){
       increasScore();
       makeBubble();
       getNewHit();
    }
});

getNewHit();
runtime();
makeBubble();
