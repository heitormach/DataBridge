import { RelatorioModel } from './../../../core/models/relatorio.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-censec',
  templateUrl: './censec.component.html',
  styleUrls: ['./censec.component.scss']
})
export class CensecComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor() { }

  ngOnInit() {
  }

}
