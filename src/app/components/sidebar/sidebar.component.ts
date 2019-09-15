import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/principal', title: 'Principal', icon: 'dashboard', class: 'primary' },
  { path: '/consulta', title: 'Consulta', icon: 'person', class: '' },
  { path: '/historico', title: 'Histórico', icon: 'schedule', class: '' },
  { path: '/configuracao', title: 'Configuração', icon: 'settings_applications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

}
