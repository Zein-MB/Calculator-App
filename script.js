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
    if ((eval(calcOperation.textContent)) % 2 === 0) {
        finalResult.innerText = parseInt(eval(calcOperation.textContent));
    } else {
        finalResult.innerText = (eval(calcOperation.textContent)).toFixed(5);
    }
}
