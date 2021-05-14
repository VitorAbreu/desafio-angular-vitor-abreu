export class HQModel {
    thumbnail: string;
    nome: string;
    price: number;
    descricao: string;

    constructor(nome: string, price: number = 0, descricao: string, thumbnail: string) {
        this.nome = nome;
        this.thumbnail = thumbnail;
        this.price = price;
        this.descricao = descricao;
    }
}
