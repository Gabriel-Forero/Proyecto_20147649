import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ComprasComponent } from './compras/compras.component';
import { MainComponent } from './main/main.component';
import { DetalleCompraComponent } from './compras/detalle-compra/detalle-compra.component';
import { ListadoComprasComponent } from './compras/listado-compras/listado-compras.component';


@NgModule({
  declarations: [RegisterComponent, ComprasComponent, MainComponent, DetalleCompraComponent, ListadoComprasComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
