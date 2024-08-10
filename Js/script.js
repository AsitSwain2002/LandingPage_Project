const signIn = document.querySelector(".signIn");
const mainConOut = document.querySelector(".mainContainerOut");
const mainCon = document.querySelector(".mainContainerIn").style.background = "linear-gradient(-145deg, rgb(23, 93, 105) 25%, rgb(51, 12, 67) 95%)"
const cut = document.querySelector(".ri-close-fill");
const closeLetter = document.querySelector(".closeLetter");
const submit = document.querySelector("#form");

const emailVal = document.querySelector("#email");
const password = document.querySelector("#pas")

const theme = document.querySelector(".signup");
const mainCont = document.querySelector(".mainCon");
const data_time = document.querySelector(".data-time")

const email = "asitswain12@gmail.com";
const pass = "12345";

const otpBtn = document.querySelector("#otpBtn");
const otpValue = document.querySelector("#otp");
let otp = 0;
//! show login page here
signIn.addEventListener('click', () => {
    mainConOut.style.display = "block";
})


//! hide login page here
cut.addEventListener("click", () => {
    mainConOut.style.display = "none"
})
//! Otp Genetation

otpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    otp = Math.round(1000 + Math.random() * 9000);
    alert(`Otp is: ${otp}`)
})
//! submit form here
submit.addEventListener("submit", (e) => {
    //! stop natural behaviour of form
    e.preventDefault();
    //! check email and password is valid or not
    if (email === emailVal.value) {
        if (pass === password.value) {
            if (otp == otpValue.value) {
                mainConOut.style.display = "none";
                //! after submit form blank the form details
                emailVal.value = ""
                password.value = '';
                alert("Login SuccessFully");

                //! fetch data here
                user();
            } else {
                alert("Invalid Otp");
                otpValue.value = ''
            }
        } else {
            alert("Invalid Password");
            password.value = '';
            otpValue.value = ''
        }
    } else {
        alert("Invalid Email")
        emailVal.value = ""
        otpValue.value = ''
    }
})

//! Theme Change
theme.addEventListener('click', () => {

    if (theme.innerText === 'Dark') {
        mainCont.style.background = "black";
        mainCont.style.color = "white";
        theme.innerText = "Light"
    } else {
        mainCont.style.background = "linear-gradient(-145deg, rgb(23, 93, 105) 25%, rgb(51, 12, 67) 95%)";
        mainCont.style.color = "white";
        theme.innerText = "Dark"
    }
})

const h2 = document.createElement("h2");
const h2_1 = document.createElement("h4");

const date = new Date();
h2.innerText = date.toLocaleDateString();
data_time.appendChild(h2);

setInterval(()=>{
    const currentTime = new Date();
    h2_1.innerText = currentTime.toLocaleTimeString();   
    data_time.appendChild(h2_1) 
},1000)



//! Fetch Data From Backend And Show Frontend
async function user(){
    const url = await fetch("https://api.escuelajs.co/api/v1/users");
    const response = await url.json();
    response.map((ele)=>{
        const main = document.querySelector("#main");
       const div = document.createElement("div");
        div.setAttribute("class","card");
        main.appendChild(div);

        const img =document.createElement("img");
        img.setAttribute("src",ele.avatar);
        img.setAttribute("alt",ele.name);

        const name = document.createElement("div");
        name.setAttribute("class","name");
        name.innerHTML = `<h3>${ele.name}</h3>`
        div.append(img,name);
 
    })  
    cookies();
}

//! accept cookies
const cookies = ()=>{
    setTimeout(()=>{
      if(confirm("Please Accept Cookies")){
      }else{
        let card = document.querySelectorAll(".card");
        card.forEach((ele)=>{
            ele.style.display = "none";
        })
        
      }
    },4000)
}
                