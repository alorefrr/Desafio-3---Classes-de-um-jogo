// calculadora de partidas rankeadas
// desafio felipão - DIO

const vitoriasDoHeroi = 151;
const derrotasDoHeroi = 54;
const resultado = calcularPartidasRank(vitoriasDoHeroi, derrotasDoHeroi);

function calcularPartidasRank(vitoriasDoHeroi, derrotasDoHeroi) {
    const saldoVitorias = vitoriasDoHeroi - derrotasDoHeroi;
    let nivel;
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    return { saldoVitorias, nivel };
}

console.log('O Herói tem de saldo de ' + saldoVitorias + ' está no nível de ' + nivel)