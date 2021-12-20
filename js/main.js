let sub = document.querySelector('.sub');
let resultValue = document.querySelector('.result-value');
let choiceSing = document.getElementById('choice-sing');


function calc() {
    let numOne = document.querySelector('.numOne').value;
    numOne = parseInt(numOne);
    let numTwo = document.querySelector('.numTwo').value;
    numTwo = parseInt(numTwo);
    let a = choiceSing.value;


    if (a === "+") {
        e = numOne + numTwo;
        resultValue.innerHTML = e;
    } else if (a === '-') {
        d = numOne - numTwo;
        resultValue.innerHTML = d;
    } else if (a === '/') {
        c = Math.ceil(numOne / numTwo);
        if (c === Infinity) {
            resultValue.innerHTML = 'Ошибочка вышла.. на ноль делить нельзя!';
        } else { resultValue.innerHTML = c; }

    } else if (a === '*') {
        b = numOne * numTwo;
        resultValue.innerHTML = b;

    }
}


sub.addEventListener('click', calc);