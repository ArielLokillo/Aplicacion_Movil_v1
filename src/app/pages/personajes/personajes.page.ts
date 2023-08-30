import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaje } from '../pages/personajes/personajes.model';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PERSONAJESPage implements OnInit {

  listaPersonajes: personaje [] = [];

  constructor(private PersonajesService: PersonajesService) { }

  ngOnInit() {
    this.listaPersonajes = this.PersonajesService.getAll()
  }
}
