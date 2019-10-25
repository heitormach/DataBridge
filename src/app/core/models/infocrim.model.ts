export interface InfoCrimModel {
    data: {
        cabecalho: string;
        autor: {
            dadosAutor1: string;
            dadosAutor2: string;
            dadosAutor3: string;
            dadosAutor4: string;
        };
        vitima: {
            dadosVitima1: string;
            dadosVitima2: string;
        };
        representante: {
            dadosRepresentante1: string;
            dadosRepresentante2: string;
        };
        historico: {
            historico: string;
        };
    };
    erro?: string;
}
