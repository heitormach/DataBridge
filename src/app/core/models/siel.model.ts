export interface SielModel {
    geral: {
        nome: string;
        titulo: string;
        dataNasc: string;
        zona: string;
        endereco: string;
        municipio: string;
        uf: string;
        dataDomicilio: string;
        nomePai: string;
        nomeMae: string;
        naturalidade: string;
        codValidacao: string;
    };
    erro?: string;
}
