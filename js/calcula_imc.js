// let titulo = document.querySelector(".titulo"); //pegando o que tem no h1
// titulo.textContent = "Braspress"; // substituindo o que tem na variavel por uma nova string

// console.log(titulo);

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const cadaPaciente = pacientes[i];

  const tdPeso = cadaPaciente.querySelector(".info-peso").textContent;
  const tdAltura = cadaPaciente.querySelector(".info-altura").textContent;

  const imcVazio = cadaPaciente.querySelector(".info-imc");

  function calculaImc (peso, altura) {
    return imc = (peso / (altura * altura)).toFixed(2);
  }
  
  calculaImc(tdPeso, tdAltura);

  imcVazio.textContent = imc;

  let pesoEhValido = validaPeso(tdPeso);
  let alturaEhValida = validaAltura(tdAltura);

  if (!pesoEhValido) {
    pesoEhValido = false;
    imcVazio.textContent = "Peso Invalido";
    cadaPaciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    alturaEhValida = false;
    imcVazio.textContent = "Altura Inválida";
    cadaPaciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura <= 3.00) {
    return true;
  } else {
    return false; 
  }
}


