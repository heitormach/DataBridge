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
    const blob = this.dataURIToBlob(linkSource);
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    const fileName = `${name}`;

    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  dataURIToBlob(dataURI) {

    const binStr = atob(dataURI.split(',')[1]);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }

    return new Blob([arr], {
      type: mimeString
    });

  }

}
