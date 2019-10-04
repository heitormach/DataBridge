import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string) {
    this.toastr.success(message, 'Sucesso');
  }

  showError(error) {
    this.toastr.error(error, 'Erro');
  }

  showWarning(aviso) {
    this.toastr.warning(aviso, 'Aviso');
  }

  showInfo(info) {
    this.toastr.info(info, 'Info');
  }
}
