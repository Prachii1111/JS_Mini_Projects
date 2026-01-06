const date = document.querySelector(".date");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");


btn.addEventListener("click", () => {

    if(!date.value) {
        text.innerText = "Please select your birth date";
        return;
    }

    const birthYear = new Date(date.value).getFullYear();
    const currentYear = new Date().getFullYear();

    const age = currentYear - birthYear;

    text.innerText = `Your age is ${age} years old`;

})
