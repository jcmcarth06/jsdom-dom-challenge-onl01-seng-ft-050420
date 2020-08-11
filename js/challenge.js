
const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')

let timer = setInterval(increaseCounter, 1000)
function increaseCounter() {
    counter.innerText ++
}

pause.addEventListener("click", toggleCounter)
function pauseCounter() {
    clearInterval(timer);
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
}

function toggleCounter() {
    if (pause.innerText === "pause") {
        pauseCounter()
    }
    else {
        resumeCounter()
    }
}



// setInterval(increaseCounter, 1000)

// document.addEventListener("domContentLoaded", "")