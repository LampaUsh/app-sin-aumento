import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../services/provincias.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


export interface Provincia {
  id: number;
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  provincias: Provincia[] = [];

  provinciaSlctd: Provincia = {
    id: 0,
    nombre: '',
    url: '',
  };

  constructor(
    private provSrv: ProvinciasService,
    private location: Location,
    private router: Router
  ) {
    provSrv.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  handleOnClickButton() {
      this.router.navigateByUrl(`/provincias/${this.provinciaSlctd.url}/productos`);
}

  ngOnInit(): void {}
}
