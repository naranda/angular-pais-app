import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Name } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  //pais!: Country;
  paises!: Country[];

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    //funciona con 2 subscribers anidados
    /*this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);

      this.paisService.getPaisPorId(id).subscribe(pais => {
        console.log(pais);
      });
    });*/

    //misma funcionalidad pero con libreria rxjs
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe(paises => {
        this.paises = paises;
        console.log(paises[0].translations)
        console.log(paises[0].translations.ara)
      });
  }

}
