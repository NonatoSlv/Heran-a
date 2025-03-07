class guerreiro extends personagem{
    constructor(nome,vida,ataque,arma){
        super(nome, vida, ataque );
        this.arma= arma;

 }
 caracteristisca(){
    console.log(`${this.nome} tem ${this.vida} de vida, e ataca usando uma ${this.arma} causando ${this.ataque} de dano`);
}
 }
