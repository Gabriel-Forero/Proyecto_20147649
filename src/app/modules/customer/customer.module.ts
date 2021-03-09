import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ComprasComponent } from './compras/compras.component';
import { MainComponent } from './main/main.component';
import { DetalleCompraComponent } from './compras/detalle-compra/detalle-compra.component';
import { ListadoComprasComponent } from './compras/listado-compras/listado-compras.component';
import { Detalle2Component } from './compras/detalle2/detalle2.component';
import { Detalle3Component } from './compras/detalle3/detalle3.component';
import { Detalle4Component } from './compras/detalle4/detalle4.component';


@NgModule({
  declarations: [RegisterComponent, ComprasComponent, MainComponent, DetalleCompraComponent, ListadoComprasComponent, Detalle2Component, Detalle3Component, Detalle4Component],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
