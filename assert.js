console.log(6===4 + 2)

console.log(6 === add(2, 4))

function add(number1, number2) {
    return (number1 + number2)
}

console.log(6 === subtract(9, 3))

function subtract(number1, number2) {
    return (number1 - number2)
}

console.log( 48 === multi(12, 4))

function multi(number1, number2) {
    return (number1 * number2)
}

console.log ( 3 === divide(12, 4))

function divide(number1, number2) {
    return (number1 / number2)
}

console.log( 8 === power(2, 3))

console.log( 81 === power(9,2))

function power(number1, number2) {
    answer = number1;
    for (index = 1; index < number2; index++) {
        answer = answer*number1
    }
    return answer
}


function assert(expected, actual, message) {
    if (expected === actual) {
        return true
    }
    else {
        console.log(message)
    }
}

assert(8,add(4,4))