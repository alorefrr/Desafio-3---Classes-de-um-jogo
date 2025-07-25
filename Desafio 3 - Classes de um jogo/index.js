<<<<<<< HEAD
=======
// Exibe os dados do personagem
class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    static AtaquesMapa = {
        guerreiro: "espada",
        mago: "magia",
        monge: "artes marciais",
        ninja: "shuriken",
    };
    
ataques() {
    let ataque = "";
    if (this.tipo === "guerreiro") {
        ataque = Personagem.AtaquesMapa.guerreiro;
    } else if (this.tipo === "mago") {
        ataque = "ataque de magia";
    } else if (this.tipo === "monge") {
        ataque = "Ataque físico";
    } else if (this.tipo === "ninja") {
        ataque = "Ataque shuriken"
    } else {
        ataque = "Nenhum, não tem poderes";
    }
}

    atacar() {
        const ataque = Personagem.AtaquesMapa[this.tipo] || "ataque básico";
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }     
    
} 
   
let heroi = new Personagem("Miguel", 2, "Mago");
heroi.ataques();
>>>>>>> 5c0914e (FInalizado, classes de um jogo)

const herois = [
    new Personagem("Miguel", 2, "mago"),
    new Personagem("Guilherme", 30, "monge"),
    new Personagem("Lucas", 28, "ninja"),
    new Personagem("Gabriel", 28, "guerreiro")
];

console.log("--- Ataques em grupo ---");
for (const heroi of herois) {
    heroi.atacar();
}
    

    