/* Add your JavaScript to this file */
window.onload = function(){
    let email= document.getElementById("email");
    let message = document.getElementsByClassName("message")[0];
    let button= document.getElementsByTagName("button")[0];
    button.onclick=function(event){
        event.preventDefault();
        if (email.value===""){
            message.innerHTML="Please enter valid email address";
        }
        else{
            message.innerHTML="Thank You! Your email address has been added to our mailing list";
        }
    }
}
