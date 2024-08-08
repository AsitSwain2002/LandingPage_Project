const signIn = document.querySelector(".signIn");
const mainCon = document.querySelector(".mainContainer");
const cut = document.querySelector(".ri-close-fill");
const closeLetter = document.querySelector(".closeLetter");
const submit = document.querySelector("#form");
const emailVal = document.querySelector("#email");
const theme = document.querySelector(".signup");
const mainCont = document.querySelector(".mainCon");

signIn.addEventListener('click' , ()=>{
mainCon.style.display = "block";
})

cut.addEventListener("click" , ()=>{
    mainCon.style.display = "none"
})
submit.addEventListener("submit" , (e)=>{
    e.preventDefault();
    // const pass = document.querySelector("#pas").value;
    // const maskedPass = pass.length > 3 ? 'X'.repeat(pass.length - 3) + pass.slice(-3) : pass.value = "X";
    // alert(`Email : ${emailVal.value}\nPassword : ${maskedPass}`)
})
// cut.addEventListener("mouseenter", () => {
//     closeLetter.style.display = "block";
// });

// cut.addEventListener("mouseleave", () => {
//     closeLetter.style.display = "none";
// });

theme.addEventListener('click',()=>{

    if(theme.innerText === 'Dark'){
    mainCont.style.background = "black";
    mainCont.style.color = "white";
    theme.innerText = "Light"
    }else{
        mainCont.style.background = "linear-gradient(-145deg, rgb(23, 93, 105) 25%, rgb(51, 12, 67) 95%)";
        mainCont.style.color = "white";
        theme.innerText = "Dark"
    }
})