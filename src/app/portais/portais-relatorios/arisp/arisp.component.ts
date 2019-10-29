import { ToastService } from './../../../core/services/toast.service';
import { PortaisService } from './../../../core/services/portais.service';
import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-arisp',
  templateUrl: './arisp.component.html',
  styleUrls: ['./arisp.component.scss']
})
export class ArispComponent implements OnInit {

  nomeAnterior: string;
  @Input() relatorio: RelatorioModel;
  constructor(
    private file: FileService,
    private portalServ: PortaisService,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  downloadPDF(nomeArquivo: string, arisp: any) {
    const botao = document.getElementById(nomeArquivo) as HTMLInputElement;
    if (!arisp.anexo.arquivo) {
      botao.disabled = true;
      this.nomeAnterior = nomeArquivo;
      arisp.anexo.nome_arquivo = 'Fazendo Download...';
      this.portalServ.getArquivo(nomeArquivo).subscribe(dadosArquivo => {
        botao.disabled = false;
        arisp.anexo.arquivo = dadosArquivo.arquivo;
        botao.click();
      }, (error: any) => {
        botao.disabled = false;
        arisp.anexo.nome_arquivo = this.nomeAnterior;
        this.toast.showError(`Erro ao realizar download do arquivo ${this.nomeAnterior}`);
      });
    } else {
      arisp.anexo.nome_arquivo = this.nomeAnterior;
      this.file.showPdf(arisp.anexo.arquivo, this.nomeAnterior);
      this.nomeAnterior = null;
      arisp.anexo.arquivo = null;
    }
  }
}
