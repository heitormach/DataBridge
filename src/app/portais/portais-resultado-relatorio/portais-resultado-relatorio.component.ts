import { Component, OnInit, Input } from '@angular/core';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portais-resultado-relatorio',
  templateUrl: './portais-resultado-relatorio.component.html',
  styleUrls: ['./portais-resultado-relatorio.component.scss']
})
export class PortaisResultadoRelatorioComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  @Input() relatorio: RelatorioModel;

  ngOnInit() {
  }

  exibirFoto() {
    return this.sanitizer.bypassSecurityTrustUrl('data:Image/*;base64,' + this.relatorio.detran.dadosDaImgCnh.foto);
  }

}
