const signIn = document.querySelector(".signIn");
const mainCon = document.querySelector(".mainContainer");
const cut = document.querySelector(".ri-close-fill");
const closeLetter = document.querySelector(".closeLetter");

signIn.addEventListener('click' , ()=>{
mainCon.style.display = "block";
})

cut.addEventListener("click" , ()=>{
    mainCon.style.display = "none"
})

// cut.addEventListener("mouseenter", () => {
//     closeLetter.style.display = "block";
// });

// cut.addEventListener("mouseleave", () => {
//     closeLetter.style.display = "none";
// });