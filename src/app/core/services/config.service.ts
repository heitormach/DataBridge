import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IConfPortais } from '../models/config-portais.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  getConfig() {
    return this.http.get(`${environment.apiUrl}/api/config_portal`);
  }

  saveConfig(config: IConfPortais) {
    return this.http.post(`${environment.apiUrl}/api/config_portal`, config);
  }
}
