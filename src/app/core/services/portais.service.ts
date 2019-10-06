import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { RelatorioModel } from '../models/relatorio.model';

@Injectable({
  providedIn: 'root'
})
export class PortaisService {

  @Output() processed: EventEmitter<boolean> = new EventEmitter();
  @Output() relatorioRetornado: EventEmitter<RelatorioModel> = new EventEmitter();

  constructor(private http: HttpClient) { }

  doRelatorio(pesquisa: any) {
    return this.http.post<RelatorioModel>(`${environment.apiUrl}/api/relatorio/v1/geracao_relatorio`, pesquisa);
  }
}
