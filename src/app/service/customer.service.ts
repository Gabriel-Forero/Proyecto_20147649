import { Injectable } from '@angular/core';
import {UserModel} from '../models/User.models'
import{HttpClient} from '@angular/common/http'
import * as data from './datos/administradores.json'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  usuarios: UserModel[];
  entity='customer';
  info: any={};
  cargada =false;
  constructor() 
  { 
      this.usuarios = new Array<UserModel>();
  }

  getDataUser()
  {
    
  }

  UserRegistering(user: UserModel)
  {
    this.usuarios.push(user);
    alert(user.nombre);
  }
  
}
