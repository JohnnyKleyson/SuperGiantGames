//Scroll to Top Button fixed on screen
const btnScrollTop = document.querySelector(".scroll-to-top");
btnScrollTop.addEventListener("click", function(){
    window.scrollTo(0,0);
})


//Set page to not refresh when submit the form

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Form Validation


function validate(){
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value;
    var message = document.querySelector(".form-textarea").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Por favor insira um nome";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor insira um email válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length == 0){
      text = "Por favor escreva sua mensagem";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <5 ){
      text = "Por favor escreva mais um pouco";
      error_message.innerHTML = text;
      return false;
    }

    alert("Mensagem Enviada com sucesso!");
    return true;
  }