export class Usuario{

  public nome: string;
  public endereco: string;
  public telefone: string;

  constructor(nome: string, endereco:string, telefone:string){
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}