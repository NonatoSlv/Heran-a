class arqueiro extends personagem{
    constructor(nome,vida,alcance,ataque){
        super(nome, vida, ataque);
        this.alcance = alcance;
    }
    caracteristisca(){
        console.log(`${this.nome} tem ${this.vida} de vida e ataca usando uma flecha que tem ${this.alcance} de alcance e ${this.ataque} de dano`);
    }
}