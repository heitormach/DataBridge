import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return (this.formulario.get(campo) && !this.formulario.get(campo).valid && this.formulario.get(campo).touched);
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  getData(date: Date) {
    return new Date(date).getTime() + (new Date().getTimezoneOffset() * 60000);
  }

  convertData(data: Date): string {
    return ('0' + data.getDate()).slice(-2) + '/' + ('0' + (data.getMonth() + 1)).slice(-2) + '/' + data.getFullYear();
  }

  getError(validationErrors) {
    Object.keys(validationErrors).forEach(prop => {
      const formControl = this.formulario.get(prop);
      if (formControl) {
        formControl.setErrors({
          serverError: validationErrors[prop]
        });
      }
    });
  }

  getErrorValidation(validationErrors) {
    validationErrors.forEach(prop => {
      const formControl = this.formulario.get(prop.campo);
      if (formControl) {
        formControl.setErrors({
          serverError: prop.mensagem
        });
      }
    });
  }

}
