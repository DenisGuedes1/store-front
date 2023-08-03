export enum Gender {
    Masculino = "Masculino",
    Feminino = "Feminino",
    Unissex = "Unissex",
    NaoDefinido = "Não definido",
}
export enum Category {
    Camisetas = "Camisetas",
    Camisas = "Camisas",
    Calcas = "Calças",
    Shorts = "Shorts",
    Saias = "Saias",
    Vestidos = "Vestidos",
    Blazers = "Blazers",
    Casacos = "Casacos",
    Jaquetas = "Jaquetas",
    RoupasIntimas = "Roupas íntimas",
    NaoDefinido = "Não definido",
}
export enum Tamanho {
    P = "P",
    M = "M",
    G = "G",
    GG = "GG",
}

export interface IProducts {
    id: string;
    name: string;
    descricao: string;
    foto1: string;
    foto2: string;
    foto3: string;
    price: number;
    isActive: boolean;
    promotion: boolean;
    category: Category;
    gender: Gender;
    quantity: number;
    tamanho: Tamanho;
}
