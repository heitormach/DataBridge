import { ArquivoModel } from './arquivo.model';
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
        anexo: ArquivoModel[]
    };
    erro?: string;
}
