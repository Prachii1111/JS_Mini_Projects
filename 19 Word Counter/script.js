const textArea = document.querySelector(".text");
console.log(textArea);
const totalCounter = document.querySelector(".total-counter");
console.log(totalCounter);
const remainCounter = document.querySelector(".remaining-counter");
console.log(remainCounter);

const maxLength =50;

textArea.addEventListener("input", (event) => {
    const typedLength = event.target.value.length;

    totalCounter.innerText = typedLength;
    remainCounter.innerText = maxLength - typedLength;
})