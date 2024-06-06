
//pegando todas as uls
// let ulPacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

//event: evento
//target: alvo (no caso o que foi clicado)
//parentNode: pegando o pai do elemento clicado
//remove(): vai remover o elemento clicado
  tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut") //pegando a classe para apagar lentamente

    setTimeout ((remove) => {               // Definindo o tempo para remoção
      event.target.parentNode.remove();
    }, 500);    
  }); 