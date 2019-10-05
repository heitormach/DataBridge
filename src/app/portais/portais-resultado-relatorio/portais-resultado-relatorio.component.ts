import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-portais-resultado-relatorio',
  templateUrl: './portais-resultado-relatorio.component.html',
  styleUrls: ['./portais-resultado-relatorio.component.scss']
})
export class PortaisResultadoRelatorioComponent implements OnInit {
  constructor() { }

  @Input() relatorio: RelatorioModel;

  ngOnInit() {
  }

}
