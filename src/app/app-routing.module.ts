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
    path:'**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
