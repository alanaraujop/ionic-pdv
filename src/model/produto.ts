//A coluna PesoL guarda o valor do preço para dinheiro.

export class Produto{
    registro: number;
    codProduto: number;
    nome: string;
    codCategoria: number;
    codMarca: number;
    imagem: string;
    tamanho: string;
    pecaCaixa: number;
    m2Caixa: number;
    precoVenda: number;
    precoCompra: number;
    quantEstoque: number;
    estMinimo: number;
    quantReserva: number;
    ean: number;
    codEmbalagem: number;
    codUnidade: number;
    pesoL: number;
    pesoB: number;
    icms: number;
    pis: number;
    tribIcms: number;
    cst: number;
    ativo: boolean;
}

export class Embalagem{
    registro: number;
    codEmbalagem: number;
    nome: string;
    ativo: boolean;
}

export class Categoria{
    registro: number;
    codCategoria: number;
    nome: string;
    ativo: boolean;
}

export class Unidade{
    registro: number;
    codUnidade: number;
    nome: string;
    ativo: boolean;
}

export class Marca{
    registro: number;
    codMarca: number;
    nome: string;
    ativo: boolean;
}