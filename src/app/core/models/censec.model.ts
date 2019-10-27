export interface CensecModel {
    data: {
        envio_carga: {
            carga: string;
            mes: string;
            ato: string;
            data_ato: string;
            livro: string;
            complemento_livro: string;
            folha: string;
            complemento_folha: string;
        };
        partes_envolvidas: [
            {
                nome: string;
                cpf_cnpj: string;
                qualidade: string;
            }
        ];
        dados_cartorio: {
            uf: string,
            municipio: string;
            cartorio: string;
            contato_cartorio: [
                {
                    telefone: string;
                    tipo: string;
                    ramal: string;
                    contato: string;
                    status: string;
                }
            ];
        }
    };
    erro?: string;
}
