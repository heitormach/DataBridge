import { HistoricoListComponent } from './../../portais/historico-list/historico-list.component';
import { ConfigComponent } from './../../portais/config/config.component';
import { PortaisFormComponent } from './../../portais/portais-form/portais-form.component';
import { Routes } from '@angular/router';
import { PortaisResultadoRelatorioComponent } from 'src/app/portais/portais-resultado-relatorio/portais-resultado-relatorio.component';
import { PortaisHtmlComponent } from 'src/app/portais/portais-html/portais-html.component';

export const BaseLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '', redirectTo: 'consulta' },
    { path: 'consulta', component: PortaisHtmlComponent },
    { path: 'configuracao', component: ConfigComponent },
    { path: 'historico', component: HistoricoListComponent },
    { path: 'teste', component: PortaisResultadoRelatorioComponent }
];
