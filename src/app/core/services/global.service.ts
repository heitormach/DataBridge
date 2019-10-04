import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable()
export class GlobalService {

  usuario: IUser = {
    login: 'teste',
    senha: 'teste',
    cpf: '48463025803'
  };

}
