import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Personajes', url: 'personajes', icon: 'people' },
    { title: 'Habilidades', url: 'habilidades', icon: 'flame' },
    { title: 'Estadisticas', url: 'personajes/estadisticas', icon: 'stats-chart' },
    { title: 'Categoria', url: 'categoria', icon: 'trash' },
    { title: 'Cerrar sesión', url: 'login', icon: 'log-out' } ,
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

