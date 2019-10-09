export interface JucespModel {
    nomeEmpresa: string;
    tipoEmpresa: string;
    dataConstituicao: string;
    dtIniAtiv: string;
    cnpj: string;
    ie: string;
    objeto: string;
    capital: string;
    endereco: {
        logradouro: string;
        numero: string;
        complemento: string;
        bairro: string;
        municipio: string;
        cep: string;
        uf: string;
    };
    erro?: string;
}
