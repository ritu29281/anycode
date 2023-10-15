let string = " ";
let btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'X') {
            string = string + "*";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'AC') {

            string = " ";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
document.getElementById('box').childNodes[1].style.backgroundColor = "red";