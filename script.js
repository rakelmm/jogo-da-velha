let jogadorDaVez = document.getElementById('sJogadorDaVez');
let countJogada = 0;
let casa = [[1, false], [2, false], [3, false], [4, false], [5, false], [6, false], [7, false], [8, false], [9, false]];

function checaTurno(event, num) {
    const element = event.target;
    salvaJogada(num);
    checaLinhaVencedor();
    if (casa[num - 1][1] === true) {
        alert('\n\nNão pode realizar uma jogada em um campo já utilizado.\n\n');
    } else {
        element.innerHTML = mudaJogador(countJogada);
        countJogada++;
    }
    casa[num - 1][1] = true;
    mudaJogador(countJogada);
}

function salvaJogada(num) {
    if (jogadorDaVez.innerText === 'X') {
        casa[num - 1].push(1);
    } else {
        casa[num - 1].push(2);
    }
}

function checaLinhaVencedor() {
    if ((casa[0][2] === 1 && casa[1][2] === 1 && casa[2][2] === 1) ||
        (casa[3][2] === 1 && casa[4][2] === 1 && casa[5][2] === 1) ||
        (casa[6][2] === 1 && casa[7][2] === 1 && casa[8][2] === 1) ||
        (casa[0][2] === 1 && casa[3][2] === 1 && casa[6][2] === 1) ||
        (casa[1][2] === 1 && casa[4][2] === 1 && casa[7][2] === 1) ||
        (casa[2][2] === 1 && casa[5][2] === 1 && casa[8][2] === 1) ||
        (casa[0][2] === 1 && casa[4][2] === 1 && casa[8][2] === 1) ||
        (casa[2][2] === 1 && casa[4][2] === 1 && casa[6][2] === 1)) {

        document.getElementById('vencedor').innerHTML = 'Jogador X venceu a partida!!';

    } else if ((casa[0][2] === 2 && casa[1][2] === 2 && casa[2][2] === 2) ||
        (casa[3][2] === 2 && casa[4][2] === 2 && casa[5][2] === 2) ||
        (casa[6][2] === 2 && casa[7][2] === 2 && casa[8][2] === 2) ||
        (casa[0][2] === 2 && casa[3][2] === 2 && casa[6][2] === 2) ||
        (casa[1][2] === 2 && casa[4][2] === 2 && casa[7][2] === 2) ||
        (casa[2][2] === 2 && casa[5][2] === 2 && casa[8][2] === 2) ||
        (casa[0][2] === 2 && casa[4][2] === 2 && casa[8][2] === 2) ||
        (casa[2][2] === 2 && casa[4][2] === 2 && casa[6][2] === 2)) {

        document.getElementById('vencedor').innerHTML = 'Jogador O venceu a partida!!';

    }
}

function mudaJogador(num) {
    if (num % 2 === 0) {
        return jogadorDaVez.innerHTML = 'X';
    } else {
        return jogadorDaVez.innerHTML = 'O';
    }
}

function limparTela() {
    location.reload();
}