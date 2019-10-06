import { PortaisService } from './../../core/services/portais.service';
import { Component, OnInit } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-portais-html',
  templateUrl: './portais-html.component.html',
  styleUrls: ['./portais-html.component.scss']
})
export class PortaisHtmlComponent implements OnInit {

  returned = false;
  relatorio: RelatorioModel;

  constructor(
    private portalServ: PortaisService
  ) { }

  ngOnInit() {

    this.portalServ.relatorioRetornado.subscribe(relatorio => {
      this.returned = true;
      this.relatorio = relatorio;
    });
  }

}
