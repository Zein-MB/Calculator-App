let finalResult = document.getElementById('finalResult'),
    calcOperation = document.getElementById('calcOperation'),
    btns = document.querySelectorAll('.calculator button:not(:first-child):not(:nth-child(2)):not(:last-child)'),
    backSpace = document.getElementById('backSpace'),
    clear = document.getElementById('clear'),
    equal = document.getElementById('equal'),
    plus = document.getElementById('plus'),
    minus = document.getElementById('minus'),
    multiple = document.getElementById('multiple'),
    divide = document.getElementById('divide'),
    operators = [plus.textContent, minus.textContent, multiple.textContent, divide.textContent];

clear.onclick = () => {
    finalResult.textContent = '';
    calcOperation.textContent = '';
}

backSpace.onclick = () => {
    calcOperation.textContent = calcOperation.textContent.toString().slice(0, -1);
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        calcOperation.textContent += btn.textContent;
    })
})

equal.onclick = () => {
    let operator = calcOperation.textContent.toString().split('').filter((el) => {
        return el == operators[0] || el == operators[1] || el == operators[2] || el == operators[3]
    }).join('');
    // let numOne = calcOperation.textContent.slice(0, calcOperation.textContent.toString().split('').indexOf(operator));
    // let numTwo = calcOperation.textContent.slice(calcOperation.textContent.toString().split('').indexOf(operator) + 1);

    // if (operator == '+') {
    //     finalResult.textContent = (Number(numOne) + Number(numTwo));
    // } else if (operator == '-') {
    //     finalResult.textContent = (Number(numOne) - Number(numTwo));
    // } else if (operator == '*') {
    //     finalResult.textContent = (Number(numOne) * Number(numTwo));
    // } else if (operator == '/') {
    //     finalResult.textContent = (Number(numOne) / Number(numTwo));
    // }
    finalResult.innerText = (eval(calcOperation.textContent)).toFixed(5);
}