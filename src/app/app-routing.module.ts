import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeafaultComponent } from './public/public/home/deafault/deafault.component';

const routes: Routes = [
  {
    path:'home',
    component: DeafaultComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/home'
  },
  {
    path:'security',
    loadChildren: () => import('./modules/security/security.module').then(m=>m.SecurityModule)
  },
  {
    path:'parameters',
    loadChildren: ()=> import('./modules/parameters/parameters.module').then(m=>m.ParametersModule)
  },
  {
    path:'**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
