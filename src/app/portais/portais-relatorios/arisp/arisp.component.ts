import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-arisp',
  templateUrl: './arisp.component.html',
  styleUrls: ['./arisp.component.scss']
})
export class ArispComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor() { }

  ngOnInit() {
  }

}
