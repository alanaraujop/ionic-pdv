export class Orcamento{
    registro: number;
    numOrcamento: number;
    dtEmissao: string;
    dtValidade: string;
    faturado: boolean;
    obs: string;
    ativo: boolean;
    valorDesconto: number;
    valor: number;
    cliente: Cliente;
    condPagamento: CondicaoPagamento;
    funcionario: Funcionario;
    itens: Array<Item>;
}

export class Cliente{
    registro: number = -1;
    codCliente: number = -1;
    nome: string;
    endereco: string;
    numero: number;
    complemento: string;
    cep: number;
    bairro: string;
    uf: string;
    municipio: string;
    tipoPessoa: string;
    cnpj: string;
    cpf: string;
    rg: number;
    ie: string;
    im: number;
    dadosBancarios: string;
    telefone: string;
    email: string;
    obs: string;
    ativo: boolean = true;
}

class CondicaoPagamento{
    codCondicaoPg: number;
    nome: string;
    prazo: number;
    codFarmaPg: number;
    formaPg: string;
}

export class Funcionario{
    codFuncionario: number;
    nome: string = "";
    senha: string = "";
}

class Item{
    registro: number;
    numOrcamento: number;
    numPedido: number;
    codProduto: number;
    nome: string;
    quantidade: number;
    valorUnitario: number;
    subTotal: number;
    ativo: boolean;
}