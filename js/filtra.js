//criando um filtro para comparar o que foi digitado com o que tem cadastrado
let campoFiltro = document.querySelector("#filtrar-tabela"); //pegando o input
campoFiltro.addEventListener("input", function () {
  //adicionando o evento ao input
  let todosPacientes = document.querySelectorAll(".paciente"); //pegando os pacientes

  if (this.value.length > 0) { // se digitar algo entra no if e faz o filtro
    
    for (let i = 0; i < todosPacientes.length; i++) {
      let cadaPaciente = todosPacientes[i]; //verificando um por um
      let tdNome = cadaPaciente.querySelector(".info-nome").textContent; //pegando o td e extraindo o conteudo
      let expressao = new RegExp(this.value, "i" ) // criando a expressao regular para filtrar por letras 
      

      //comparando o input com o nome..
      if (!expressao.test(tdNome)) { //chamadno a expressao, testando e jogando o nome dentro. A expressao contem o this.value já e buscará letra por letra
        //se diferente acrescenta a classe para sumir o td
        cadaPaciente.classList.add("someNoFiltro");
      } else {
        //Se igual, mantem a lista como esta (não adiciona a classe de sumir)
        cadaPaciente.classList.remove("someNoFiltro");
      }
    }
  } else {
    for (let i = 0; i < todosPacientes.length; i++) { //senão difgitar ele não ativa o filtro (não ativa a classe)
      let cadaPaciente = todosPacientes[i];
      cadaPaciente.classList.remove("someNoFiltro");
    }
  }
});


