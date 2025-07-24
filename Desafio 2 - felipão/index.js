function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    return { saldoVitorias, nivel };
}

const vitorias = 205;
const derrotas = 204;
const resultado = calcularRank(vitorias, derrotas);
console.log('O herói tem de saldo de ' + resultado.saldoVitorias + ' está no nivel de ' + resultado.nivel);