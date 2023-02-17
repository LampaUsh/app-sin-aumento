import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import * as noUiSlider from 'nouislider';
import { Title } from '@angular/platform-browser';

export interface Producto {
  ean: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos :Producto[]=[];

  productosFiltrados: Producto[] = [];
  provinciaSlctd: string = "tierra-del-fuego";
  filtroTexto: string = "";
  filtroPrecio: number = 0;
  precioMaximo: number = 100000;

  constructor(productosSrv: ProductosService,
    actRoute: ActivatedRoute,
    ) {

    const { nombreProvincia } = actRoute.snapshot.params;
    Swal.showLoading();
    this.provinciaSlctd = nombreProvincia;
    productosSrv.getProductos(nombreProvincia).subscribe((data: any) => {
      
      this.productos = data;
      this.productosFiltrados = data;
      Swal.close();
      this.precioMaximo = Math.max(...this.productos.map((producto) => producto.precio)) + 1;
      this.filtroPrecio = this.precioMaximo;
    });
  }


  onFiltroTextoChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroPrecio != 0){

        return (producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
            || (producto.ean + '').includes(parametroIngresado)) && producto.precio <= this.filtroPrecio;
      }
      else{

        return producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
          || (producto.ean + '').includes(parametroIngresado);
      }
    });
  }

  onFiltroPrecioChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroTexto != ""){
        return producto.precio <= parametroIngresado && (
          producto.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase())
            || (producto.ean + '').includes(this.filtroTexto)
        )
      }
      else{
        return producto.precio <= parametroIngresado;
      }
    })
  }

  ngOnInit(): void {}
}
