import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeafaultComponent } from './public/public/home/deafault/deafault.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './modules/Administrador/create/create.component';
import { DeleteComponent } from './modules/Administrador/delete/delete.component';
import { UpdateComponent } from './modules/Administrador/update/update.component';
import { ReadComponent } from './modules/Administrador/read/read.component';
import { SalesComponent } from './modules/Administrador/sales/sales.component';
import {MainComponent2} from './modules/Administrador/main2/main2.component'

@NgModule({
  declarations: [
    AppComponent,
    DeafaultComponent,
    NavbarComponent,
    SideMenuComponent,
    HeroComponent,
    FooterComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent,
    SalesComponent,
    MainComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
