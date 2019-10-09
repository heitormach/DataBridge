import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormDefaultModule } from '../form-default/form-default.module';
import { PortaisHtmlComponent } from './portais-html/portais-html.component';
import { PortaisFormComponent } from './portais-form/portais-form.component';
import { ConfigComponent } from './config/config.component';
import { HistoricoListComponent } from './historico-list/historico-list.component';
import { PortaisResultadoRelatorioComponent } from './portais-resultado-relatorio/portais-resultado-relatorio.component';
import { PortaisResultadoPrintComponent } from './portais-resultado-print/portais-resultado-print.component';
import { ArispComponent } from './portais-relatorios/arisp/arisp.component';
import { ArpenspComponent } from './portais-relatorios/arpensp/arpensp.component';
import { CadespComponent } from './portais-relatorios/cadesp/cadesp.component';
import { CagedComponent } from './portais-relatorios/caged/caged.component';
import { DetranComponent } from './portais-relatorios/detran/detran.component';
import { InfocrimComponent } from './portais-relatorios/infocrim/infocrim.component';
import { JucespComponent } from './portais-relatorios/jucesp/jucesp.component';
import { SielComponent } from './portais-relatorios/siel/siel.component';
import { SivecComponent } from './portais-relatorios/sivec/sivec.component';
import { HistoricoHtmlComponent } from './historico-html/historico-html.component';

@NgModule({
  declarations: [PortaisHtmlComponent, PortaisFormComponent, ConfigComponent, HistoricoListComponent, PortaisResultadoRelatorioComponent, PortaisResultadoPrintComponent, ArispComponent, ArpenspComponent, CadespComponent, CagedComponent, DetranComponent, InfocrimComponent, JucespComponent, SielComponent, SivecComponent, HistoricoHtmlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormDefaultModule
  ],
  exports: [
    PortaisHtmlComponent,
    PortaisFormComponent,
    ConfigComponent,
    HistoricoListComponent
  ]
})
export class PortaisModule { }
