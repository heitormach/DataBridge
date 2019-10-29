import { FileService } from './../../../core/services/file.service';
import { PortaisService } from './../../../core/services/portais.service';
import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detran',
  templateUrl: './detran.component.html',
  styleUrls: ['./detran.component.scss']
})
export class DetranComponent implements OnInit {

  @Input() relatorio: RelatorioModel;

  constructor(
    private sanitizer: DomSanitizer,
    private portalServ: PortaisService,
    private file: FileService
  ) { }

  ngOnInit() {
    for (const anexo of this.relatorio.detran.data.anexo) {
      this.portalServ.getArquivo(anexo.nome_arquivo).subscribe(dadosArquivo => {
        anexo.arquivo = dadosArquivo.arquivo;
      });
    }
  }

  exibirFoto() {
    return this.sanitizer.bypassSecurityTrustUrl('data:Image/*;base64,' + this.relatorio.detran.data.anexo[1].arquivo);
  }

  download(arquivo: string, nome: string) {
    this.file.showPdf(arquivo, nome);
  }

}
