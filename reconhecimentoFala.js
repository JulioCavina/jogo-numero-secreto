window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
let = contadorTurnos = 0;
const elementoPalpite = document.querySelector('#palpite');

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', recognition.start);  // Restart recognition after it ends

function onSpeak(e) {
    let chute = e.results[e.results.length - 1][0].transcript;
    exibePalpite(chute);
    verificacaoPalpite(chute);
}

function exibePalpite(chute) {
    elementoPalpite.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span><br>
        <span class="box2"></span><br>
        <button class="button try-again-button">Finalizar jogo</button>
    `;
    document.querySelector('.try-again-button').addEventListener('click',()=>{
        window.location.reload();
    })
}

botaoIniciar.addEventListener('click', () => {
    recognition.start();
    botaoAlterarNumeros.remove();
    botaoIniciar.remove();
    generateRandomNumber();

});
