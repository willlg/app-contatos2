export default class Contato{
  private _nome: string;
  private _telefone: number;
  private _email: string;
  private _sexo: string;
  private _id: string;

  constructor(nome: string, telefone: number){
    this._nome = nome;
    this._telefone = telefone;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get telefone(): number {
    return this._telefone;
  }
  public set telefone(value: number) {
    this._telefone = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get sexo(): string {
    return this._sexo;
  }
  public set sexo(value: string) {
    this._sexo = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

}
