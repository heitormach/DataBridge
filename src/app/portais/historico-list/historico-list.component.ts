import { PortaisService } from './../../core/services/portais.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ResultConsultaModel } from 'src/app/core/models/result-consulta.model';
import { Observable } from 'rxjs';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-historico-list',
  templateUrl: './historico-list.component.html',
  styleUrls: ['./historico-list.component.scss']
})
export class HistoricoListComponent implements OnInit {
  tamanho = 0;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['criterioBusca.nome', 'criterioBusca.cpf',
    'criterioBusca.razaoSocial', 'criterioBusca.cnpj', 'criterioBusca.inicioBusca', 'acoes'];
  listaConsultas: Observable<ResultConsultaModel[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private portalServ: PortaisService
  ) { }

  ngOnInit() {
    this.listaConsultas = this.portalServ.getHistorico();
    this.onRefresh();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRefresh() {
    this.listaConsultas.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.tamanho = data.length;
      }
    );
  }

  acessar(relatorio: RelatorioModel) {
    this.portalServ.relatorioSelected.emit(relatorio);
  }

}
