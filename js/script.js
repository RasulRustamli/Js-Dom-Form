function Submit() {
    let inputFirstName = document.getElementById("InputFirstName").value;
    let inputLastName = document.getElementById("InputLastName").value;
    let inputEmail = document.getElementById("InputEmail").value;
    let inputPassword = document.getElementById("InputPassword").value;
    let inputPasswordConfirm = document.getElementById("InputPasswordConfirm").value;
    var letterNumber = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    switch (true) {
        case inputFirstName.length == 0:
            document.getElementById('errorFirstName').innerHTML = "Please enter a valid input";
            break;
        case inputLastName.length == 0:
            document.getElementById('errorLastName').innerHTML = "Please enter a valid input";
            break;
        case inputEmail.length == 0:
            document.getElementById('errorEmail').innerHTML = "Please enter a valid input";
            break;
        case !inputEmail.match(email):
            document.getElementById('errorEmail').innerHTML = "Invalid email. Please enter correct form.";
            break;
        case inputPassword.length == 0:
            document.getElementById('errorPassword').innerHTML = "Please enter a valid input";
            break;
        case inputPassword.length < 8:
            document.getElementById('errorPassword').innerHTML = "Enter more than 8 characters";
            break;
        case !inputPassword.match(letterNumber):
            document.getElementById('errorPassword').innerHTML = "Must contain letter, capital letter and numbers";
            break;
         case inputPasswordConfirm.length == 0:
              document.getElementById('errorPasswordConfirm').innerHTML = "Please enter a valid inputtt";
           break;
         case inputPassword!=inputPasswordConfirm:
             document.getElementById('errorPasswordConfirm').innerHTML = "Password is not correct.";
             break;
        default:
            window.open("https://www.youtube.com/watch?v=RMxbF6oTEcY", '_blank').focus();
            break;
    }
    
}

