let contadorTurnos = 0;
function verificacaoPalpite(chute) {

    const numero = +chute;
    const campoTexto2 = document.querySelector('.box2');

    if (isNaN(numero) || chute.trim() === '') {
        campoTexto2.innerHTML = 'WOOOOPS, tenta de novo amigão';
    } else {
        if (numero < menorValorNumero) {
            campoTexto2.innerHTML = `ERRADO! O número precisa ser maior do que ${menorValorNumero}.`;
        } else if (numero > maiorValorNumero) {
            campoTexto2.innerHTML = `ERRADO! O número precisa ser menor do que ${maiorValorNumero}.`;
        } else {
            contadorTurnos = contadorTurnos +1;
            if (numero < numeroAleatorioReal) {
                campoTexto2.innerHTML = `O número secreto é MAIOR que ${numero}! <i class="fa-solid fa-arrow-up"></i>`;
            } else if (numero > numeroAleatorioReal) {
                campoTexto2.innerHTML = `O número secreto é MENOR que ${numero}! <i class="fa-solid fa-arrow-down"></i>`;
            } else {
                finalizarJogo(numero);
            }
        }
    }
}

function finalizarJogo(numero) {
    document.body.innerHTML = `
        <h1>ACERTOU! O número secreto era ${numero}! <i class="fa-solid fa-check"></i></h1>
        <h3>Levou ${contadorTurnos} tentativas para achar a resposta!!!</h3>
        <button class="button end-button">Jogar Novamente</button>
    `;
    document.querySelector('.end-button').addEventListener('click', () => {
        window.location.reload();
    });
}
