const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");
const numberEl = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operator");
const equalEl = document.querySelector(".equals");
const clearEl = document.querySelector(".clear"); 
const backspaceEl = document.querySelector(".backspace");

let value = "";

numberEl.forEach(number => {
    number.addEventListener("click", (e) => {
        // console.log("Clicked target: ", e.target.innerText);
        value += e.target.innerText;
        result.value = value;
    })
});

operatorEl.forEach(operator => {
    operator.addEventListener("click", (e) => {
        // console.log("Clicked target: ", e.target.innerText);

        const lastChar = value.slice(-1);
        if ("+-*/%".includes(lastChar)) return;

        value += e.target.innerText;
        result.value = value;
    })
});

document.querySelector(".decimal").addEventListener("click", () => {
    if (!value.includes(".")) {
        value += ".";
        result.value = value;
    }
});

equalEl.addEventListener("click", () => {
    try {
        value = eval(value).toString();
        result.value = value;
    } catch {
        result.value = "Error";
        value = "";
    }
});

clearEl.addEventListener("click", () => {
    value = "";
    result.value = "0";
});

backspaceEl.addEventListener("click", () => {
    value = value.slice(0, -1);
    result.value = value || "0";
});