// Carne = 400g por pessoas  + de 6 hrs = 650g
// Cerveja = 1200ml por pessoas  + de 6 hrs = 2000ml
// Refrigerante/agua = 1000ml por pessoas  + de 6 hrs = 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let btnCalcular = document.getElementById("calcular");

let resultado = document.getElementById("resultado");
let btnFechar = document.getElementById("fechar");
    
btnCalcular.addEventListener('click', (e)=>{
    if(inputAdultos.value > 0){
        calcular()
    }
});


function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);
   
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML += `<p><img class="img" src="./imagens/carne.svg"> ${qtdTotalCarne /1000} Kg de Carne<p/>`;
    resultado.innerHTML += `<p><img class="img" src="./imagens/cerveja.svg"> ${Math.ceil(qtdTotalCerveja /355)} Latas de (350ml) Cerveja<p/>`;
    resultado.innerHTML += `<p><img class="img" src="./imagens/refri.svg"> ${Math.ceil(qtdTotalBebidas /2000)} Garrafas(2L) de Bebibas<p/>`;
    resultado.innerHTML += `<button id="fechar" onclick="abrirResultado()">Fechar</button>`;
    
    abrirResultado()
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function abrirResultado(){
    document.getElementById("container").classList.toggle('index');
    resultado.classList.toggle('abrir');
    document.getElementById('fundo').classList.toggle('abrir');
}
