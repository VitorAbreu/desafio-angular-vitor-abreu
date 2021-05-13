export class HeroiModel {
    id: string;
    nome: string;
    foto: string;
    descricao: string;

    constructor(nome: string, foto: string, descricao: string, id: string) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
    }
}
