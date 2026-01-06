const testimonials = [
    {
        name: "Cherise G",
        imageUrl: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name: "Constantine V",
        imageUrl: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
    },
    {
        name: "Rosetta Q",
        imageUrl: "https://images.unsplash.com/photo-1570466451723-2fc240f1c80a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels"
    }
];

const imageEl = document.querySelector(".profile");
const descEl = document.querySelector(".description");
const nameEl = document.querySelector(".name");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, imageUrl, text } = testimonials[idx];

    imageEl.src = imageUrl;
    descEl.innerText = text;
    nameEl.innerText = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}







// idea
// profile images (store in array)
// intro 

// structure is same , content is changing 
// or maybe 3 divs with content 