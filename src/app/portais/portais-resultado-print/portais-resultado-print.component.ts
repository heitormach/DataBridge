import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-portais-resultado-print',
  templateUrl: './portais-resultado-print.component.html',
  styleUrls: ['./portais-resultado-print.component.scss']
})
export class PortaisResultadoPrintComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor() { }

  ngOnInit() {
  }

}
