 const inp = document.querySelector("#user-input");
const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operation");


numbers.forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inp.innerText === "NaN") {
            inp.innerText = "";
        }
        if (inp.innerText === "0") {
            inp.innerText = "";
        }
        inp.innerText += e.target.innerHTML.trim();
    });
});

operations.forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inp.innerText.substring(inp.innerText.length - 1);
        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            inp.innerText = eval(inp.innerText);
        } else if (e.target.innerHTML === "C") {
            inp.innerText = 0;
        } else if (e.target.innerHTML === "del") {
            inp.innerText = inp.innerText.substring(0, inp.innerText.length - 1);
            if (inp.innerText.length == 0) {
                inp.innerText = 0;
            }
        } else {
            if (!isNaN(lastValue)) {
                inp.innerText += e.target.innerHTML;
            }
        }
    });
});