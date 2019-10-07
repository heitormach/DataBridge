import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-arpensp',
  templateUrl: './arpensp.component.html',
  styleUrls: ['./arpensp.component.scss']
})
export class ArpenspComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor() { }

  ngOnInit() {
  }

}
