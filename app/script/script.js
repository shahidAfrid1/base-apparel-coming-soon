let form = document.querySelector("form");
let error = document.querySelector("#error");
let email = document.querySelector("#email");
let emailValue = document.querySelector("#email").value;

form.addEventListener("submit",(e)=>{
    if(!ValidateEmail(emailValue)){
        email.classList.add("active")
        error.classList.add("error-active")
        e.preventDefault()
    }
})
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return true;
    }
    return false;
}

setInterval(() => {
    if(email.value.length <=4){
        email.classList.remove("active")
        error.classList.remove("error-active")
        clearInterval()
    }
    
}, 1);