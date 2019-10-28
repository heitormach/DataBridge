import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-portais-resultado-relatorio',
  templateUrl: './portais-resultado-relatorio.component.html',
  styleUrls: ['./portais-resultado-relatorio.component.scss']
})
export class PortaisResultadoRelatorioComponent implements OnInit {
  constructor(
  ) { }

  @Input() relatorio: RelatorioModel;
  @Output() evento: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  emitEvento() {
    this.evento.emit();
  }

  print(divName) {
    const printContents = document.getElementById(divName).innerHTML;
    const popupWin = window.open('', '_blank', 'width=300,height=300');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" /><style type="text/css">.noPrint{display:none;}</style></head><body onload="window.print()">'
      + printContents +
      '</body></html>');
    popupWin.document.close();

  }

}
