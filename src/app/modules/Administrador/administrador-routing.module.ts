import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './create/create.component'
import {DeleteComponent} from './delete/delete.component'
import {ReadComponent} from './read/read.component'
import {SalesComponent} from './sales/sales.component'
import {MainComponent2} from './main2/main2.component'
import {UpdateComponent} from './update/update.component'


const routes: Routes = [
  {
    path:'create',
    component: CreateComponent
  },
  {
    path:'delete',
    component: DeleteComponent
  },
  {
    path:'read',
    component: ReadComponent
  },
  {
    path:'sales',
    component: SalesComponent
  },
  {
    path:'main2',
    component: MainComponent2
  },
  {
    path:'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
