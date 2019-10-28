export interface DetranModel {
    data: {
        dadosCNH: {
            renach: string;
            categoria: string;
            emissao: string;
            nascimento: string;
            nomeCondutor: string;
            nomePai: string;
            nomeMae: string;
            registro: string;
            tipografico: string;
            identidade: string;
            cpf: string;
        };
        anexo: [{
            nome_arquivo?: string;
            arquivo?: string;
        }];
    };
    erro?: string;
}
