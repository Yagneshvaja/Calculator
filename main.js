let inpbox = document.getElementById('inp-box');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string));
            inpbox.value = string;
        }
        else if (b.target.innerText == 'AC') {
            string = "";
            inpbox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inpbox.value = string;
        } else if (b.target.id == 'plusMinus') {
            string = String(-eval(string));
            inpbox.value = string;
        }
        else {
            string += b.target.innerText;
            inpbox.value = string;
        }
    })
})
