import { ISearch } from './search-portais.model';
import { RelatorioModel } from './relatorio.model';

export interface ResultConsultaModel {
    id: string;
    usuario: string;
    inicioBusca: string;
    fimBusca: string;
    criterioBusca: ISearch;
    relatorio: RelatorioModel;
}
