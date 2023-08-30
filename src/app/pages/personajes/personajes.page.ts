import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from './personajes.models';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PERSONAJESPage implements OnInit {

  listaPersonajes: Personaje [] = [];

  constructor(private personajesService: PersonajesService) { }

  ngOnInit() {
    this.listaPersonajes = this.personajesService.getAll()
  }
}
