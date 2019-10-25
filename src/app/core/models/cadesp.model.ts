export interface CadespModel {
    data: {
        cabecalho: {
            nomeEmpresa: string;
            cnpj: string;
            ie: string;
            drt: string;
            situacao: string;
            dataInscricao: string;
            regime: string;
            posto: string;
        };
        geral: {
            nomeFantasia: string;
            cnpj: string;
            ie: string;
            nire: string;
            sitCadastral: string;
            ocorrenciaFiscal: string;
            tipoUnidade: string;
            dtInscricaoEstado: string;
            dtInicioIE: string;
            dtInicioSituacao: string;
            formasAtuacao: string;
        };
    };
    erro?: string;
}
