class mago extends personagem{
    constructor(nome,vida,mana,magia,ataque){
        super(nome, vida, ataque);
        this.mana = mana;
        this.magia = magia;

}
caracteristisca(){
    console.log(`${this.nome} tem ${this.vida} de vidA e tem ${this.mana} de mana usando o a magia ${this.magia} que causa ${this.ataque} de dano`);
}
}