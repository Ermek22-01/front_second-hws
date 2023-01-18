const counter = document.querySelector('.counter')
const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const clearBtn = document.querySelector('.clear')
const block = document.querySelector('.block')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

function increment () {
    counter.innerHTML++
    counter.style.color = 'green'
}
function decrement () {
    if(counter.innerHTML > 0) {
        counter.innerHTML--
        counter.style.color = 'red'
    }
}

function clear () {
    counter.innerHTML = 0
    counter.style.color = 'black'
}

function findMouseCoord (e) {
    x.innerHTML = e.offsetX
    y.innerHTML = e.offsetY
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
clearBtn.addEventListener('click', clear)
block.addEventListener('mousemove', findMouseCoord)