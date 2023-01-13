function num (a, b) {
    if (a < b) {
        console.log("минимальное число", a)
    }
    else if (b < a) {
        console.log("Минимальное число" , b)
    }
    else if (b === a) {
        console.log("число ", + "и" + b + "равны")
    }
    else {
        console.log("Error")
    }
}
num (56, 33)


var str = (u = prompt('введите текст')) => {
    return u.length
}
console.log(str())


var calculate = function (a, b) {
    console.log()
}


var numberOne = +prompt('введите первое число')
var numbeTwo = +prompt('введите второе число')

function multCalc (a, b) {
    console.log(a + b, 'сложение');
    console.log(a - b, 'вычитание');
    console.log(a * b, 'умножение');
    console.log(a / b, 'деление');
}
    multCalc(numberOne, numbeTwo)
