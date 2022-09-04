// get data from the local storage
let dataUser = JSON.parse(localStorage.getItem("userKey"))||[]
// OOP
class User{
    constructor(){
        this.signInBtn = document.querySelector(".signIn-btn")
        this.loginBtn = document.querySelector(".login-btn")
        this.para = document.querySelector(".welcome")
    }
    // sign in function that set the local storage
    signInFun(){
        let userName = document.querySelector(".user-input").value
        let password = document.querySelector(".password-input").value
        let email = document.querySelector(".email-input").value
        let phoneNumber = document.querySelector(".phone-input").value
        if (
            userName == "" ||
            password == "" ||
            email == "" ||
            phoneNumber == "" 
          ) {
             alert("fill all the inputs");
          }else{
        // obj of the user
        let user = {
            userName: userName,
            password: password,
            email: email,
            phone: phoneNumber
        }
        dataUser.push(user)
        localStorage.setItem(userName, JSON.stringify(dataUser))}
        
    }
    // log in function that get the data from the local storage
     logInFun(){
        let loginInput = document.querySelector(".login-input").value
        let passwordInput = document.querySelectorAll(".password-input")[1].value
        // get the data from the local storage
        let user = localStorage.getItem(loginInput)
        let data = JSON.parse(user)
        console.log(passwordInput);
        if(data == null){
            this.para.innerHTML = "something wrong chick your details"
        }else if( loginInput == data[0].userName && passwordInput == data[0].password){
            this.para.innerHTML = `welcome ${loginInput}`
            window.location.href =  '/accont/accountPage.html'
        }else{
            this.para.innerHTML = "wrong password"
            console.log(loginInput);
            console.log(passwordInput);
        }
    }

}
const userOne = new User();
userOne.signInBtn.addEventListener("click", function(){
    userOne.signInFun()
})
userOne.loginBtn.addEventListener("click" ,function(){
    userOne.logInFun()
})
