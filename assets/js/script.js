// document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

// function validaFormulario(){
//   if(document.getElementById("nome").value && document.getElementById("telefone").value && document.getElementById("email").value !=""){
//     alert("Prontinho! Você receberá as novidades por email.")
//     } else{
//       alert("Por favor, preencha os campos nome, email e telefone!")
//     }
// }

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let tefone = document.querySelector("#telefone");

function validaNome() {
  let txt = document.querySelector("#txtNome")
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido"
    txt.style.color = "red"
  } else {
    txt.innerHTML = "Nome válido"
    txt.style.color = "green"
  }
}

function validaEmail() {
  let inputEmail = document.querySelector("#txtEmail")
  if (email.value.indexof("@") == -1) {
    inputEmail.innerHTML = "Email inválido"
    inputEmail.style.color = "red"
  } else {
    inputEmail.innerHTML = "Email válido"
    inputEmail.style.color = "green"
  }
}
