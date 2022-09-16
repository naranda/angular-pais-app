import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }

    `
  ]
})
export class PorRegionComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarRegion(this.termino).subscribe(paises => {
      this.paises = paises;
    }, err => {
      console.log('Error');
      console.error(err);
      this.hayError = true;
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO generar sugerencias
  }

  getClaseCSS(region: string) {

    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    //TODO hacer el llamado al servicio
  }
}
