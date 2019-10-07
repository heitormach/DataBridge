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
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  exibirFoto() {
    return this.sanitizer.bypassSecurityTrustUrl('data:Image/*;base64,' + this.relatorio.detran.dadosDaImgCnh.foto);
  }

}
