import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Personajes', url: 'personajes', icon: 'people-outline' },
    { title: 'Habilidades', url: 'habilidades', icon: 'flame-outline' },
    { title: 'Estadisticas', url: 'estadisticas', icon: 'stats-chart-outline' },
    { title: 'Categoria', url: 'categoria', icon: 'trash' },
    { title: 'Rango', url: 'rango', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

