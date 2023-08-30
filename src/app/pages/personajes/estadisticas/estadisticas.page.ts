import { Component, OnInit } from '@angular/core';
import { Personaje } from '../personajes.models';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  personaje!: Personaje;

  constructor(private personajeService: PersonajesService, 
              private activatedRoute : ActivatedRoute,
              ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const  aux = param.get('id')
      if (aux) {
        this.personaje = this.personajeService.getPersonaje(aux)
      }
    })
  }

}
