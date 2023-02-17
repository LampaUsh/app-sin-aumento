import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProvinciasComponent } from './provincias/provincias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'provincias',
    component: ProvinciasComponent,
  },
  {
    path: 'provincias/:nombreProvincia/productos',
    component: ProductosComponent,
  },
  //{ path: '**', /* redirectTo: '/home' */ component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}