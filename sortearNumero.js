let numeroAleatorio = null;
let numeroAleatorioReal = null;
let maiorValorNumero = 1000;
let menorValorNumero = 0;
let deltaNumero = 1000;

const maiorValorHTML = document.querySelector('#maior-valor');
const menorValorHTML = document.querySelector('#menor-valor');
const botaoAlterarNumeros = document.querySelector('.change-button-class');
const botaoIniciar = document.querySelector('.start-button-class');

function generateRandomNumber() {
    numeroAleatorio = parseInt(Math.random() * deltaNumero);
    numeroAleatorioReal = numeroAleatorio + menorValorNumero;
    //console.log('delta ', deltaNumero)
    //console.log('num aleatorio ', numeroAleatorio)
    //console.log('num aleatorio real ', menorValorNumero + numeroAleatorio)
}

botaoAlterarNumeros.addEventListener('click', () => {
    let menorValor = prompt('Qual será o MENOR valor??????');

    if (isNaN(menorValor) || menorValor.trim() === "" || menorValor === null) {
        alert("Por favor, insira um número válido para o MENOR valor.");
        return;
    }

    let maiorValor = prompt('Qual será o MAIOR valor????');

    if (isNaN(maiorValor) || maiorValor.trim() === "" || maiorValor === null) {
        alert("Por favor, insira um número válido para o MAIOR valor.");
        return;
    }

    menorValor = parseInt(menorValor);
    maiorValor = parseInt(maiorValor);

    if (menorValor >= maiorValor) {
        alert("O MENOR valor não pode ser maior ou igual que o MAIOR valor!!!");

        return;
    } else {
        menorValorNumero = menorValor;
        maiorValorNumero = maiorValor;

        menorValorHTML.innerHTML = menorValorNumero;
        maiorValorHTML.innerHTML = maiorValorNumero;
        deltaNumero = (maiorValor) - (menorValor) + 1;
        generateRandomNumber();
    }
});
