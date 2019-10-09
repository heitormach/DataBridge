import { PortaisService } from './../../core/services/portais.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ResultConsultaModel } from 'src/app/core/models/result-consulta.model';
import { Observable } from 'rxjs';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { isNumber } from 'util';

@Component({
  selector: 'app-historico-list',
  templateUrl: './historico-list.component.html',
  styleUrls: ['./historico-list.component.scss']
})
export class HistoricoListComponent implements OnInit {
  tamanho = 0;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['nome', 'cpf',
    'razaoSocial', 'cnpj', 'inicioBusca', 'acoes'];
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

        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return this.nestedFilterCheck(currentTerm, data, key);
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          // Transform the filter by converting it to lowercase and removing whitespace.
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.paginator = this.paginator;

        this.dataSource.sortingDataAccessor =
          (dados: any, sortHeaderId: string): string | number => {
            let value = null;
            if (sortHeaderId.includes('.')) {
              const ids = sortHeaderId.split('.');
              value = dados;
              ids.forEach((x) => {
                value = value ? value[x] : null;
              });
            } else {
              value = dados[sortHeaderId];
            }
            return isNumber(value) ? Number(value) : value;
          };
        this.dataSource.sort = this.sort;

        this.tamanho = data.length;
      }
    );
  }

  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  acessar(relatorio: RelatorioModel) {
    this.portalServ.relatorioSelected.emit(relatorio);
  }

}
