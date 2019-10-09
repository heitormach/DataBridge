export interface DetranModel {
    dadosDaImgCnh: {
        foto: string;
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
    condutor: {
        nomeCondutor: string;
        nacionalidade: string;
        rg: string;
        rne: string;
        municipio: string;
        dtNascimento: string;
        natural: string;
        UF: string;
        idHabil: string;
        valRNE: string;
        sexo: string;
        CPF: string;
        orgaoEx: string;
        pais: string;
    };
    cnh: {
        registro: string;
        local: string;
        espelhoPID: string;
        emiCNH: string;
        pgu: string;
        categoria: string;
        pHabil: string;
        status: string;
        renach: string;
        espelhoCNH: string;
        valCNH: string;
        pontuacao: string;
    };
    ocorrencias: [
        {
            data: string;
            descricao: string;
        }
    ];
    erro?: string;
}
