import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
import { personaje } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PERSONAJESPage implements OnInit {

  Personaje! : personaje;

  constructor(private PersonajeService: PersonajesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.Personaje = this.PersonajeService.getPersonaje(aux)
      }
    })
  }

}
