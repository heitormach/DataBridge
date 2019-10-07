import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-cadesp',
  templateUrl: './cadesp.component.html',
  styleUrls: ['./cadesp.component.scss']
})
export class CadespComponent implements OnInit {

  @Input() relatorio: RelatorioModel;

  constructor() { }

  ngOnInit() {
  }

}
