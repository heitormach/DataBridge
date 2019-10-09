import { PortaisService } from './../../core/services/portais.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-historico-html',
  templateUrl: './historico-html.component.html',
  styleUrls: ['./historico-html.component.scss']
})
export class HistoricoHtmlComponent implements OnInit {

  relatorio: RelatorioModel;
  relatorioSelecionado: boolean;

  constructor(private portalServ: PortaisService) { }

  ngOnInit() {
    this.portalServ.relatorioSelected.subscribe(relatorio => {
      this.relatorio = relatorio;
      this.relatorioSelecionado = true;
    });
  }
}
