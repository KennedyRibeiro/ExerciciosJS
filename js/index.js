// Exercício 1
function exibirMensagem(){
    let nomeUsuario = prompt('Digite o seu nome:');
    window.alert(`Olá ${nomeUsuario}! Bem-vindo ao site`);
}



// Exercício 2
function concatenação(){
    let nome = document.getElementById('nome').value; 
    let rua   = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;

    document.getElementById('resultado-concatenacao').value = `${nome}, mora em ${cidade}, ${uf}, no bairro ${bairro}, na rua ${rua}, com nº ${numero} `;
}



//Exercicio 3
function soma(){
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);

    document.getElementById('resultado-soma').value = n1 + n2;
    
}

//Exercício 4

function exp(){
    let anosEstudo = parseInt(document.getElementById('anos-estudo').value);

    if(anosEstudo <= 1){
        document.getElementById('resultado-experiencia').value = 'Iniciante'
    } else if(anosEstudo >= 1 && anosEstudo <= 3){
        document.getElementById('resultado-experiencia').value = 'Intermediário'
    } else if(anosEstudo >= 3 && anosEstudo <= 6){
        document.getElementById('resultado-experiencia').value = 'Avançado'
    } else if(anosEstudo >= 7){
        document.getElementById('resultado-experiencia').value = 'Jedi Master'
    }
}

function parouimpar(){
    let num = document.getElementById('numero-verificar').value;
    let teste = num%2;

    if(teste == 1){
        document.getElementById('resultado-par-impar').value = 'Ímpar';
    } else{
        document.getElementById('resultado-par-impar').value = 'Par';
    }
    
}