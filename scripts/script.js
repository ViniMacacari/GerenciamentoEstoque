// Script padrão da página

// Login
const btn = document.getElementById("logbtn");

btn.addEventListener("click", function(event){

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var userL = user.length;
    var passL = pass.length;

    if (user === "" || pass === ""){
        alert("O campo de usuário ou de senha não podem estar vazios!")
    } else if (userL < 5 || passL < 8){
        alert("O usuário deve ter 5 caracteres e a senha 8!")
    } else if (user == "vinicius.macacari" && pass == "12345678"){
        window.location.href = "./local.html";
    } else {
        alert("Senha e/ou usuário incorretos")
    }
})

// Bloqueia espaços e letras maiusculas no usuario

const userField = document.getElementById("user");

userField.addEventListener("input", function(event) {
    let userInput = userField.value;
    
    // Remove espaços em branco
    userInput = userInput.replace(/\s/g, ".");
  
    // Converte para letras minúsculas
    userInput = userInput.toLowerCase();
  
    // Atualiza o valor do campo de usuário
    userField.value = userInput;
  });
  