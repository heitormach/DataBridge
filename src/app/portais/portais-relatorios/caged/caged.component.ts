import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-caged',
  templateUrl: './caged.component.html',
  styleUrls: ['./caged.component.scss']
})
export class CagedComponent implements OnInit {

  @Input() relatorio: RelatorioModel;

  constructor() { }

  ngOnInit() {
  }

}
