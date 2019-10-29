import { Router } from '@angular/router';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  login(usuario: string, senha: string) {

    sessionStorage.setItem('usuario', `{ "login": "${usuario}", "senha": "${senha}" }`);

    this.router.navigate(['/consulta']);

  }
}
