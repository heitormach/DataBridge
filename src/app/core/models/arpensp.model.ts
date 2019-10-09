export interface ArpenspModel {
    cartorio: string;
    cns: string;
    conjuge1: string;
    conjuge2: string;
    dadosCasamento: {
        matricula: string;
        conjuge1Casamento: string;
        conjuge2Casamento: string;
        dataCasamento: string;
        dataEntrada: string;
        dataRegistro: string;
        acervo: string;
        numLivro: string;
        numFolha: string;
        numRegistro: string;
        tipoLivro: string;
    };
    erro?: string;
}
