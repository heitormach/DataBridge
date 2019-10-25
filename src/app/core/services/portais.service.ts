import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { RelatorioModel } from '../models/relatorio.model';
import { ResultConsultaModel } from '../models/result-consulta.model';

@Injectable({
  providedIn: 'root'
})
export class PortaisService {

  @Output() processed: EventEmitter<boolean> = new EventEmitter();

  @Output() relatorioRetornado: EventEmitter<RelatorioModel> = new EventEmitter();

  @Output() relatorioSelected: EventEmitter<RelatorioModel> = new EventEmitter();

  constructor(private http: HttpClient) { }

  doRelatorio(pesquisa: any) {
    return this.http.post<any>(`${environment.apiUrl}/api/relatorio/v1/geracao_relatorio`, pesquisa);
  }

  getProcessamento(idPorta: string) {
    const header = new HttpHeaders({
      id_relatorio: idPorta
    });
    return this.http.get<any>(`${environment.apiUrl}/api/relatorio/v1/consulta_status_relatorio`, { headers: header });
  }

  getHistorico() {
    return this.http.get<ResultConsultaModel[]>(`${environment.apiUrl}/api/relatorio/v1/consulta_relatorio`);
  }

  getArquivo(nomeArquivo: string) {
    const header = new HttpHeaders({
      nome_arquivo: nomeArquivo
    });

    return this.http.get<any>(`${environment.apiUrl}/api/relatorio/v1/consulta_arquivo`, { headers: header });
  }
}
