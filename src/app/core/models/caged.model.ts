export interface CagedModel {
    autorizado_responsavel: {
        cnpj_cpf_cei: string;
        razao_social: string;
        logradouro: string;
        bairro: string;
        municipio: string;
        uf: string;
        cep: string;
        nome: string;
        cpf: string;
        telefone: string;
        ramal: string;
        email: string;
    };
    empresa: {
        atividade_economica_cnae: string;
        totais: {
            numero_filiais: string,
            admissoes: string,
            variacao_absoluta: string,
            total_vinculos: string,
            desligamentos: string,
            primeiro_dia: string,
            ultimo_dia: string
        }
    };
    trabalhador: {
        nome: string;
        pis_base: string;
        cpf: string;
        ctps: string;
        situacao_pis: string;
        nacionalidade: string;
        grau_de_instrucao: string;
        pcd: string;
        data_nascimento: {};
        sexo: string;
        raca: string;
        tempo_trabalho: {
            caged: string;
            rais: string;
        };
        vinculos_trabalhador: [
            {
                fonte: string;
                razao_social: string;
                cnpj: string;
                cei: string;
                entrada: string;
                saida: string;
                situacao: string;
            }
        ]
    };
}
