import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { PagErrorComponent } from './pag-error/pag-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ProvinciasComponent,
    BarraComponent,
    PagErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
