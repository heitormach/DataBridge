import { HistoricoHtmlComponent } from './../../portais/historico-html/historico-html.component';
import { ConfigComponent } from './../../portais/config/config.component';
import { Routes } from '@angular/router';
import { PortaisHtmlComponent } from 'src/app/portais/portais-html/portais-html.component';

export const BaseLayoutRoutes: Routes = [
    { path: '', redirectTo: 'consulta' },
    { path: 'consulta', component: PortaisHtmlComponent },
    { path: 'configuracao', component: ConfigComponent },
    { path: 'historico', component: HistoricoHtmlComponent }
];
