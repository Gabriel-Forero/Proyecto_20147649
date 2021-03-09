import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ComprasComponent} from './compras/compras.component'
import {MainComponent} from './main/main.component'
import {DetalleCompraComponent} from './compras/detalle-compra/detalle-compra.component'
import {ListadoComprasComponent} from './compras/listado-compras/listado-compras.component'

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'compra',
    component: ComprasComponent
  },
  {
    path:'detalleCompra',
    component: DetalleCompraComponent
  },
  {
    path:'listadoCompra',
    component: ListadoComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
