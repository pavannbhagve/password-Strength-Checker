const input = document.querySelector("#password");
const output = document.querySelector("#output");



input.addEventListener('input' , function () {

    console.log(input.value);
    

 let password = input.value;

 if(password.length < 8){

    output.innerText = "Password is too short";
    output.style.color ="red";
//  }else{
// output.innerText = "Pasword is too long"
// output.style.color = "Green";

 }

 if (password.search(/[a-z]/) == -1) {

    output.innerText = "Password is missing a lowarcase letter";
    output.style.color = "red";
    
 }else if (password.search(/[A-Z]/) == -1){

    output.innerText = "Password is missing a Uppercase letter";
    output.style.color = "red";
 }else if (password.search(/[0-9]/) == -1){

    output.innerText = "Password is missing a Numaric letter";
    output.style.color = "red";
 }else if (password.search(/[!@#$%^&*()_+{}[]|\<>:;'".]/) == -1){

    output.innerText = "Password is missing a Special Character ";
    output.style.color = "red";
 }else{

    output.innerText = "Password is strong";
    output.style.color = "green";
 }
    
    
});