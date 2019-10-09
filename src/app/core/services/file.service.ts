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

  showPdf(pdf: string, name: string) {
    const linkSource = 'data:application/pdf;base64,' + pdf;
    const downloadLink = document.createElement('a');
    const fileName = `${name}.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

}
