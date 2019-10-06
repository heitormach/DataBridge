export interface InfoCrimModel {
    boletim: {
        dependencia: string;
        boletimNum: string;
    };
    crime: {
        natureza: string;
        local: string;
        complemento: string;
        tipoLocal: string;
        circunscricao: string;
        dataOcorrencia: string;
        dataComunicacao: string;
        elaboradoEm: string;
        providenciasTomadas: {
            examesRequisitados: string;
            provasColhidas: string;
            solucao: string;
        }
    };
    pessoas: {
        autor: {
            nome: string;
            vulgo: string;
            mae: string;
            pai: string;
            documento: {};
            naturalDe: string;
            nascimento: string;
            nacionalidade: string;
            sexo: string;
            corDaPele: string;
            idade: string;
            estadoCivil: string;
            profissao: string;
            instrucao: string;
            olhos: string;
            cabelos: string;
            altura: string;
            compleicaoFisica: string;
            usaOculos: string;
            barba: string;
            bigode: string;
            cavanhaque: string;
            faltamDentes: string;
            usaDentadura: string;
            dentesDeOuro: string;
            ponte: string;
            localTatuagem: string;
            desenhoTatuagem: string;
            localCicatriz: string;
            desenhoCicatriz: string;
            defeitoFisico: string;
            desviosDeConduta: string;
            sofreMentais: string;
            amnesia: string;
            roupas: {
                descricaoCalcado: string;
            },
            relacFamiliares: string;
            localDesapAnterior: string;
            motPrisaoAnterior: string;
            outrasInformacoes: string;
            enderecoResidencial: string;
            bairro: string;
            cidade: string;
            cep: string;
            fone: string;
            recado: string;
            conducao: string;
            pontoReferencia: string;
            enderecoComercial: string;
            localFatos: {
                bairro: string;
                cidade: string;
                cep: string;
                fone: string;
                recado: string;
                conducao: string;
                pontoReferencia: string;
                nomeEmpresa: string;
            }
        };
        vitima: {
            nome: string;
            vulgo: string;
            mae: string;
            pai: string;
            documento: {
                rg: string;
            };
            naturalDe: string;
            nascimento: string;
            nacionalidade: string;
            sexo: string;
            corPele: string;
            idade: string;
            estadoCivil: string;
            profissao: string;
            instrucao: string;
            enderecoResidencial: string;
            bairro: string;
            cidade: string;
            cep: string;
            fone: string;
            recado: string;
            conducao: string;
            pontoReferencia: string;
        };
        representante: {
            nome: string;
            vulgo: string;
            mae: string;
            pai: string;
            documento: {
                rg: string;
            },
            naturalDe: string;
            nascimento: string;
            nacionalidade: string;
            sexo: string;
            corPele: string;
            idade: string;
            estadoCivil: string;
            profissao: string;
            instrucao: string;
            enderecoResidencial: string;
            bairro: string;
            cidade: string;
            cep: string;
            fone: string;
            recado: string;
            conducao: string;
            pontoReferencia: string;
            histórico: string;
        }
    };
}