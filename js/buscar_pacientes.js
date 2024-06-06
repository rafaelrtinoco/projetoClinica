

let botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click" , (buscando) => {
  
  let xhr = new XMLHttpRequest(); //falando qual tipo de requisição quero
  xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); // pegando os dados da API

  xhr.addEventListener("load", (carregar) => { //carregando arquivo

    if(xhr.status == 200) {let resposta = xhr.responseText;
      let objPacientes = JSON.parse(resposta);
      
      objPacientes.forEach(function (objPacientes) {
        adicionaPacienteNaTabela(objPacientes)
        console.log("carregou")
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      let erroAjax = document.querySelector(".erro-ajax");
      erroAjax.textContent = "Erro ao carregar tabela."
    }

    
    
  })
  xhr.send();
} )

// let botaoBuscar = addEventListener("click" , (buscar) => {
//   alert("Botão clicado");
// })
