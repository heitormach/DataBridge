import { PortaisService } from './../../../core/services/portais.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-arisp',
  templateUrl: './arisp.component.html',
  styleUrls: ['./arisp.component.scss']
})
export class ArispComponent implements OnInit {

  @Input() relatorio: RelatorioModel;
  constructor(
    private file: FileService,
    private portalServ: PortaisService
  ) { }

  ngOnInit() {
  }
  downloadPDF(nomeArquivo: string, arisp: any) {
    if (!arisp.anexo.arquivo) {
      this.portalServ.getArquivo(nomeArquivo).subscribe(dadosArquivo => {
        arisp.anexo.arquivo = dadosArquivo.arquivo;
        document.getElementById(nomeArquivo).click();
      });
    } else {
      this.file.showPdf(arisp.anexo.arquivo, nomeArquivo);
      arisp.anexo.arquivo = null;
    }
  }
}
