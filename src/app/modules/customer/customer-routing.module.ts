import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ComprasComponent} from './compras/compras.component'
import {MainComponent} from './main/main.component'

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
    path:'Compras',
    component: ComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
