 const block = document.querySelector(".inner__block")

    let x = 0
    let y = 0
    const BlockMove = () => {
        if (x <= 0 && y > -400 ) {
            x += -8
            y += -8
            block.style.bottom = `${y}px`
            block.style.right = `${x}px`
        } else if(x < 300 && y <= -400) {
            x += 8
            block.style.right = `${x}px`


        } else if(x <= 300 && y >= -400 ) {
            x += -8
            y += -8
            block.style.bottom = `${x}px`
            block.style.right = `${y}px`
        }

        setTimeout(BlockMove, 50)
    }
    BlockMove()



const timer = document.querySelector('.timer')

let timerInterval = setInterval(() => {
    if(timer.innerHTML < 60) {
        timer.innerHTML++
    } else {
        clearInterval(timerInterval)
    }
}, 1000)



