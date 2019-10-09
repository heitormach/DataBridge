import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-jucesp',
  templateUrl: './jucesp.component.html',
  styleUrls: ['./jucesp.component.scss']
})
export class JucespComponent implements OnInit {

  @Input() relatorio: RelatorioModel;

  constructor() { }

  ngOnInit() {
  }

}
