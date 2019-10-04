import { FormValidation } from 'src/app/form-default/form-validation';
import { BaseFormComponent } from 'src/app/form-default/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      loginCadesp: [null, Validators.required],
      senhaCadesp: [null, Validators.required],
      loginCaged: [null, [
        Validators.required,
        FormValidation.validarCPFCNPJ,
        Validators.minLength(11),
        Validators.maxLength(11)]],
      senhaCaged: [null, Validators.required],
      loginCensec: [null, Validators.required],
      senhaCensec: [null, Validators.required],
      loginDetran: [null, [
        Validators.required,
        FormValidation.validarCPFCNPJ,
        Validators.minLength(11),
        Validators.maxLength(11)]],
      senhaDetran: [null, Validators.required],
      loginInfoCrim: [null, Validators.required],
      senhaInfoCrim: [null, Validators.required],
      loginSiel: [null, [Validators.required, Validators.email]],
      senhaSiel: [null, Validators.required],
      loginSivec: [null, Validators.required],
      senhaSivec: [null, Validators.required]
    });
  }

}
