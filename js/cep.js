"use strict"
const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar")
const saida = document.getElementById("saida");

function exibirDadosCEP(obj)
{
    if (!obj.erro) 
    {
        return `${obj.logradouro} - ${obj.complemento}, ${obj.bairro},${obj.localidade} ,${obj.uf}`;
    }
    else 
    {
        return "CEP inexistente."
    }
}
async function buscaDadosCEP()
{
    let urlCEP = `https://viacep.com.br/ws/${getCEP()}/json/`;
    saida.textContent = "";
    try 
    {
        const CEPbuscado = fetch(urlCEP);
        const resposta = await CEPbuscado;
        const dadosCEPJSON = await resposta.json();
        console.log(dadosCEPJSON);
        saida.textContent = exibirDadosCEP(dadosCEPJSON);
    }
    catch (error) 
    {
        error = "CEP invalido"
        saida.textContent = error;
    }
}
function getCEP() 
{
    return cep.value;
}
btnPesquisar.addEventListener("click", buscaDadosCEP);



