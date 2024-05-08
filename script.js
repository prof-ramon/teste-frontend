async function buscar(){
    
    const resposta = await fetch('http://localhost:3000/json');
    const dados = await resposta.json();
    console.log(dados);
    
    document.getElementById('outDados').textContent = dados.nome;

}