import { PortaisService } from './../../core/services/portais.service';
import { BaseFormComponent } from 'src/app/form-default/base-form/base-form.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/form-default/form-validation';
import { ISearch } from 'src/app/core/models/search-portais.model';
import { RelatorioModel } from 'src/app/core/models/relatorio.model';

@Component({
  selector: 'app-portais-form',
  templateUrl: './portais-form.component.html',
  styleUrls: ['./portais-form.component.scss']
})
export class PortaisFormComponent extends BaseFormComponent implements OnInit {

  @Output() relatorioPass: EventEmitter<RelatorioModel> = new EventEmitter();
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

  portaisMatricula = [
    'checkSivec'
  ];

  portaisRg = [
    'checkSivec',
    'checkDetran'
  ];

  consultando: boolean;

  dadosConsulta: ISearch;

  constructor(
    private fb: FormBuilder,
    private portalServ: PortaisService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      id: [null],
      nome: [null],
      cpf: [null, [Validators.minLength(11), Validators.maxLength(11), FormValidation.validarCPFCNPJ]],
      rg: [null],
      cnpj: [null, [Validators.minLength(14), Validators.maxLength(14), FormValidation.validarCPFCNPJ]],
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

    this.formulario.setValidators(this.atLeastOneValidator());
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

    if (event.target.name === 'matriculaSap') {
      this.portaisMatricula.forEach(portal => {
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

  onSubmit() {

    this.consultando = true;

    this.dadosConsulta = {
      nome: this.formulario.get('nome').value,
      cpf: this.formulario.get('cpf').value,
      cnpj: this.formulario.get('cnpj').value,
      matriculaSap: this.formulario.get('matriculaSap').value,
      numProcesso: this.formulario.get('numProcesso').value,
      placaVeiculo: this.formulario.get('placaVeiculo').value,
      razaoSocial: this.formulario.get('razaoSocial').value,
      rg: this.formulario.get('rg').value,
      portais: []
    };

    if (this.formulario.get('checkArpensp').value === true) {
      this.dadosConsulta.portais.push(2);
    }

    if (this.formulario.get('checkCadesp').value === true) {
      this.dadosConsulta.portais.push(3);
    }

    if (this.formulario.get('checkCaged').value === true) {
      this.dadosConsulta.portais.push(4);
    }

    if (this.formulario.get('checkCensec').value === true) {
      this.dadosConsulta.portais.push(5);
    }

    if (this.formulario.get('checkDetran').value === true) {
      this.dadosConsulta.portais.push(6);
    }

    if (this.formulario.get('checkInfocrim').value === true) {
      this.dadosConsulta.portais.push(7);
    }

    if (this.formulario.get('checkJucesp').value === true) {
      this.dadosConsulta.portais.push(8);
    }

    if (this.formulario.get('checkSiel').value === true) {
      this.dadosConsulta.portais.push(9);
    }

    if (this.formulario.get('checkSivec').value === true) {
      this.dadosConsulta.portais.push(10);
    }

    this.portalServ.doRelatorio(this.dadosConsulta).subscribe(relatorio => {
      this.portalServ.relatorioRetornado.emit(relatorio);
      this.portalServ.processed.emit();
    });

  }

}
