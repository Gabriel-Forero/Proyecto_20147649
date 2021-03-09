import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import {CustomerService} from '../../../service/customer.service'
import { CustomerModule } from '../customer.module';
import {UserModel} from '../../../models/User.models'

declare const showMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator!: FormGroup;
  service?: CustomerService;

  constructor(private fb: FormBuilder)  {}

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding()
  {
    this.fgValidator = this.fb.group(
      {
        documento: ['',[Validators.required]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        email: ['',[Validators.required]],
        celular:['',[Validators.required]],
        pais:['',[Validators.required]],
        ciudad:['',[Validators.required]],
        contraseña:['',[Validators.required]],
        tipoUsuario:['',[Validators.required]]
      });
  }

  CustomerRegisterFn()
  {
    
    if(this.fgValidator.invalid)
    {
      alert("Formulario invalido, asegurese de llenar todos los campos");
     
      return false;
    }
    else
    {
      let model = this.getUserData();
      this.service?.UserRegistering(model);
      
      alert("Usuario agregado");
    }
  
    return false;
  }

  get fgv()
  {
    return this.fgValidator.controls;
  }

  getUserData(): UserModel
  {
    let model = new UserModel();
    model.id = '1';
    model.documento = this.fgv.documento.value;
    model.nombre=this.fgv.nombre.value;
    model.apellido=this.fgv.apellido.value;
    model.email=this.fgv.email.value;
    model.celular=this.fgv.celular.value;
    model.pais=this.fgv.pais.value;
    model.ciudad=this.fgv.ciudad.value;  
    model.contraseña= this.fgv.contraseña.value; 
    model.tipoUsuario=this.fgv.tipoUsuario.value; 

    return model;
  }
}
