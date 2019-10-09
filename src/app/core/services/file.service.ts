import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  atualizaFormFile(event: any, formulario: FormGroup): boolean {
    const reader = new FileReader();
    if (event.files && event.files.length > 0) {
      const file = event.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const contagem: number = reader.result.toString().indexOf(',') + 1;
        formulario.patchValue({
          arquivo: reader.result.toString().substring(contagem)
        });
      };
      return true;
    } else {
      formulario.patchValue({
        arquivo: 'ArquivoInvalido'
      });
      return false;
    }
  }

  atualizaDragDrop(event: any, formulario: FormGroup): boolean {
    const reader = new FileReader();
    if (event) {
      const file = event;
      reader.readAsDataURL(file);
      reader.onload = () => {
        const contagem: number = reader.result.toString().indexOf(',') + 1;
        formulario.patchValue({
          arquivo: reader.result.toString().substring(contagem)
        });
      };
      return true;
    } else {
      formulario.patchValue({
        arquivo: 'ArquivoInvalido'
      });
      return false;
    }
  }

  atualizaFormImagem(event: any, formulario: FormGroup): boolean {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const contagem: number = reader.result.toString().indexOf(',') + 1;
        formulario.patchValue({
          image: reader.result.toString().substring(contagem)
        });
      };
      return true;
    }
    formulario.patchValue({
      image: environment.falha
    });
    return false;
  }

  atualizaFormXMLPDF(event: any, formulario: FormGroup, teste: string): boolean {
    const reader = new FileReader();
    if (event.files && event.files.length > 0) {
      const file = event.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const contagem: number = reader.result.toString().indexOf(',') + 1;
        formulario.patchValue({
          [teste]: reader.result.toString().substring(contagem)
        });
      };
      return true;
    } else {
      formulario.patchValue({
        arquivo: 'ArquivoInvalido'
      });
      return false;
    }
  }

  base64(file: string) {
    const base64 = 'data:image/gif;base64,';
    if (file.substring(0, 5) !== 'data:') {
      return this.sanitizer.bypassSecurityTrustUrl(`${base64}${file}`);
    } else {
      return this.sanitizer.bypassSecurityTrustUrl(file);
    }
  }

  showPdf(pdf: string, name: string) {
    const linkSource = 'data:application/pdf;base64,' + pdf;
    const downloadLink = document.createElement('a');
    const fileName = `${name}.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

}
