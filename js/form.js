
let pegaBotao = document.querySelector("#adicionar-paciente");
pegaBotao.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona") //pegando o formulario

  let paciente = obtemPacienteDoFormulario (form);
  
  adicionaPacienteNaTabela(paciente);

  let erros = validaPaciente(paciente);
  

  if(erros.length > 0) {
    exibMensagensDeErro(erros);
    return;
  }

  form.reset(); //limpar os campos do formulario.
  var limpaErro = document.querySelector(".mensagem");
  limpaErro.innerHTML = "";  
  
})

function adicionaPacienteNaTabela(paciente){
  let pacienteTr = montaTr(paciente);
  //pegando a tabela no html
let tabela = document.querySelector("#tabela-pacientes");
//adicionando o paciente na tabela do html
tabela.appendChild(pacienteTr);
}


function exibMensagensDeErro(erros) {
  let ul = document.querySelector(".mensagem");
  ul.innerHTML = ""; // quando realizar novo teste vai zerar a ul.
  erros.forEach(recebeErro => {
    let li = document.createElement("li")
    li.textContent = recebeErro;
    ul.appendChild(li);
  });
  
}

function obtemPacienteDoFormulario (form) {
  
  var paciente = {
    nomeForm: form.nome.value,
    pesoForm: form.peso.value,
    alturaForm: form.altura.value,
    gorduraForm: form.gordura.value,
    imcForm: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;   
}
  
// validaAltura(paciente.alturaForm);
function montaTr (paciente) {
  
  let pacienteTr = document.createElement("tr"); //criando Tr
  pacienteTr.classList.add("paciente") //adicionando a classe paciente ao Tr

//colocando os tds dentro do tr
  pacienteTr.appendChild(criaTd(paciente.nomeForm, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.pesoForm, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.alturaForm, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gorduraForm, "info-gordura")); 
  pacienteTr.appendChild(criaTd(paciente.imcForm, "info-imc"));

  return pacienteTr;
}

function criaTd (dadoPaciente, classe) {
  let td = document.createElement("td");
  td.textContent = dadoPaciente;
  td.classList.add(classe);

  return td;
}


function validaPaciente(paciente) {

  let erros = [];

  if(paciente.nomeForm.length == 0) erros.push("Campo nome em branco")

  if(!validaPeso(paciente.pesoForm )) erros.push("Peso inválido")
  
  if(!validaAltura(paciente.alturaForm )) erros.push("Altura Invalida")

  if(paciente.gorduraForm.length == 0) erros.push("Campo gordura em branco")

  if(paciente.pesoForm.length == 0) erros.push("O campo peso está em branco")

  if(paciente.alturaForm.length == 0) erros.push("O campo altura está em branco")
  
  return erros;

}








// titulo.addEventListener("click", (retornaClick) => {
//   console.log("Olá eu fui clicado");
// }); //adiciona um evento ao titulo (evento click, nome da função)
