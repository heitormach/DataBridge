import { PortaisService } from './../../../core/services/portais.service';
import { FileService } from './../../../core/services/file.service';
import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-jucesp',
  templateUrl: './jucesp.component.html',
  styleUrls: ['./jucesp.component.scss']
})
export class JucespComponent implements OnInit {

  @Input() relatorio: RelatorioModel;

  constructor(
    private file: FileService,
    private portalServ: PortaisService
  ) { }

  ngOnInit() {
    if (this.relatorio.jucesp.data.anexo.nome_arquivo) {
      this.portalServ.getArquivo(this.relatorio.jucesp.data.anexo.nome_arquivo).subscribe(
        dadosAnexo => {
          this.relatorio.jucesp.data.anexo.arquivo = dadosAnexo.arquivo;
        }
      );
    }
  }

  downloadPDF(anexo: string, nomeArquivo: string) {
    this.file.showPdf(anexo, nomeArquivo);
  }

}
