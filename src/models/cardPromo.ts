export class CardPromo{

    public nome: string;
    public pontos: number;
    public dataFimPromo: Date;
    
  
    constructor(nome: string, pontos:number,dataFimPromo: Date){
      this.nome = nome;
      this.pontos= pontos;
      this.dataFimPromo= dataFimPromo;
    }
  }