import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ComprasComponent} from './compras/compras.component'
import {MainComponent} from './main/main.component'
import {DetalleCompraComponent} from './compras/detalle-compra/detalle-compra.component'
import {Detalle2Component} from './compras/detalle2/detalle2.component'
import {Detalle3Component} from './compras/detalle3/detalle3.component'
import {Detalle4Component} from './compras/detalle4/detalle4.component'
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
    path:'detalle',
    component: DetalleCompraComponent
  },
  {
    path:'listadoCompra',
    component: ListadoComprasComponent
  },
  {
    path:'detalle2',
    component: Detalle2Component
  },
  {
    path:'detalle3',
    component: Detalle3Component
  },
  {
    path:'detalle4',
    component: Detalle4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
