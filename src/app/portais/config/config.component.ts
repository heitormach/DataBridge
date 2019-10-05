import { ToastService } from './../../core/services/toast.service';
import { ConfigService } from './../../core/services/config.service';
import { FormValidation } from './../../form-default/form-validation';
import { BaseFormComponent } from 'src/app/form-default/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IConfPortais } from 'src/app/core/models/config-portais.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends BaseFormComponent implements OnInit {

  config: IConfPortais;

  constructor(
    private fb: FormBuilder,
    private confService: ConfigService,
    private toast: ToastService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      cadesp: this.fb.group({
        login: [null, Validators.required],
        senha: [null, Validators.required]
      }),
      caged: this.fb.group({
        login: [null, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          FormValidation.validarCPFCNPJ]],
        senha: [null, Validators.required]
      }),
      censec: this.fb.group({
        login: [null, Validators.required],
        senha: [null, Validators.required]
      }),
      detran: this.fb.group({
        login: [null, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          FormValidation.validarCPFCNPJ]],
        senha: [null, Validators.required]
      }),
      infocrim: this.fb.group({
        login: [null, Validators.required],
        senha: [null, Validators.required]
      }),
      siel: this.fb.group({
        login: [null, Validators.required],
        senha: [null, Validators.required]
      }),
      sivec: this.fb.group({
        login: [null, Validators.required],
        senha: [null, Validators.required]
      })
    });

    this.onRefresh();
  }

  onSubmit() {
    this.confService.saveConfig(this.formulario.value).subscribe(sucesso => {
      this.toast.showSuccess('Dados Salvos com Sucesso');
    }, (error: any) => {
      this.toast.showError(error.error);
    });
  }

  onRefresh() {
    this.confService.getConfig().subscribe((config: any) => {
      this.formulario.patchValue(config.configuracao_login);
    });
  }

}
