import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare const showMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator!: FormGroup;

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
        contraseña:['',[Validators.required]]
      });
  }

  CustomerRegisterFn()
  {
    
    if(this.fgValidator.invalid)
    {
      alert("Formulario invalido, asegurese de llenar todos los campos");
     
      return false;
    }
    
    return false;
  }

  get fgv()
  {
    return this.fgValidator.controls;
  }

}
