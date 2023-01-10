var numbers = [10, 20, 30, 50, 235, 3000];
for (var i = 0; i < numbers.length; i++) {
    var number = `${numbers[i]}`
    if (number[0] === "1" || number [0] === "2" || number[0] === "5") {
        console.log(number);
    }
}

//

    for (var n = 20; n >= 0; n--) {
        console.log(n)
    }

    //

    var h = prompt ('Выберите цвет светофора: red yellow, green')
    switch (h) {
        case 'red':
            alert ('stop')
            break
        case 'yellow':
            alert ('wait')
            break
        case 'green':
            alert ('go')
            break
        default:
            alert ('ERROR')
            break
    }