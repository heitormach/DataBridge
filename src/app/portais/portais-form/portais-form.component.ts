import { BaseFormComponent } from 'src/app/form-default/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/form-default/form-validation';

@Component({
  selector: 'app-portais-form',
  templateUrl: './portais-form.component.html',
  styleUrls: ['./portais-form.component.scss']
})
export class PortaisFormComponent extends BaseFormComponent implements OnInit {

  portais = [
    'checkArisp',
    'checkArpensp',
    'checkCadesp',
    'checkCaged',
    'checkCensec',
    'checkDetran',
    'checkInfocrim',
    'checkJucesp',
    'checkSiel',
    'checkSivec'
  ];

  portaisCpf = [
    'checkArisp',
    'checkCensec',
    'checkCaged',
  ];

  portaisCnpj = [
    'checkCadesp',
    'checkCaged',
    'checkCensec',
  ];

  portaisRazaoSocial = [
    'checkJucesp'
  ];

  portaisProcesso = [
    'checkSiel',
    'checkArpensp'
  ];

  portaisNome = [
    'checkSivec',
    'checkSiel',
    'checkInfocrim'
  ];

  portaisNomeMae = [
    'checkSiel'
  ];

  portaisMatricula = [
    'checkSivec'
  ];

  portaisRg = [
    'checkSivec',
    'checkDetran'
  ];

  consultando: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      id: [null],
      nome: [null],
      cpf: ['', [Validators.minLength(11), Validators.maxLength(11), FormValidation.validarCPFCNPJ]],
      nomeMae: [null],
      rg: [null],
      cnpj: ['', [Validators.minLength(14), Validators.maxLength(14), FormValidation.validarCPFCNPJ]],
      razaoSocial: [null],
      numProcesso: [null],
      placaVeiculo: [null],
      matriculaSap: [null],
      checkArisp: [false],
      checkArpensp: [false],
      checkCadesp: [false],
      checkCaged: [false],
      checkCensec: [false],
      checkDetran: [false],
      checkInfocrim: [false],
      checkJucesp: [false],
      checkSiel: [false],
      checkSivec: [false]
    });

    this.disableFields();

  }

  changed(event: any) {
    if (event.target.name === 'cpf') {
      this.portaisCpf.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });

      if (this.formulario.get('placaVeiculo').value !== null && this.formulario.get('placaVeiculo').value !== '') {
        this.formulario.get('checkDetran').enable();
        this.formulario.get('checkDetran').setValue(true);
      }
    }

    if (event.target.name === 'nome') {
      this.portaisNome.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });
    }

    if (event.target.name === 'razaoSocial') {
      this.portaisRazaoSocial.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });
    }

    if (event.target.name === 'nomeMae') {
      this.portaisNomeMae.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });
    }

    if (event.target.name === 'placaVeiculo') {
      if (this.formulario.get('cpf').value !== null && this.formulario.get('cpf').value !== '') {
        this.formulario.get('checkDetran').enable();
        this.formulario.get('checkDetran').setValue(true);
      }
    }

    if (event.target.name === 'numProcesso') {
      this.portaisProcesso.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });
    }

    if (event.target.name === 'cnpj') {
      this.portaisCnpj.forEach(portal => {
        this.formulario.get(portal).enable();
        this.formulario.get(portal).setValue(true);
      });
    }
  }

  disableFields() {
    this.portais.forEach(portal => {
      this.formulario.get(portal).disable();
    });
  }

  consultar() {
    this.consultando = true;

    this.disableFields();

    this.formulario.disable();
  }

}
