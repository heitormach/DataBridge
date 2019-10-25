export interface ArispModel {
    data: [{
        cidade: string;
        cartorio: string;
        matricula: string;
        anexo?: {
            nome_arquivo?: string;
            arquivo?: string;
        }
    }];
    erro?: string;
}
