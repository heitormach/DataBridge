import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infocrim',
  templateUrl: './infocrim.component.html',
  styleUrls: ['./infocrim.component.scss']
})
export class InfocrimComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor() { }

  ngOnInit() {
  }

}
