const corpo = document.querySelector("body");
const bt = document.getElementById("modoDark");
bt.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
})



function gerarRelatorio(){
    let feedback = document.getElementById("feedbackmensagem");
    let select = document.getElementById("tipoDeRelatorio")
    feedback.style.display="block"
    if(select.value === ""){
        feedback.textContent= "Selecione um tipo de relatorio"
        feedback.style.color = "red"
    }
    if(select.value === "vendas"){
        feedback.textContent= "Gerando relatório de vendas"
        feedback.style.color = "blue"
    }
    if(select.value === "usuarios"){
        feedback.textContent= "Gerando relatório de usuários"
        feedback.style.color = "blue"
    }

}

function cancelarRelatorio(){
    let feedback = document.getElementById("feedbackmensagem")
    let select = document.getElementById("tipoRelatorio")
    feedback.style.display="none"
}

const form = document.getElementById("confg");
const mensagem = document.getElementById("mensagem-status");

form.addEventListener("submit",function (e){
    e.prevenrDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "red";
      } else {
       
        mensagem.textContent = "Configurações salvas com sucesso!";
        mensagem.style.color = "green";
      }
})

document.getElementById("cancel").addEventListener("click", () =>{
    form.reset();
    mensagem.textContent= "";
})