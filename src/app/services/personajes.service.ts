import { Injectable } from '@angular/core';
import { personaje } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personaje: PersonajesService[] = [
    {
    id: '1',
    nombre: 'Canserbero',
    imagen: 'https://resizer.glanacion.com/resizer/rI0GT1hTws9mq9TBQJGPS_YKdc8=/880x586/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VBNBHW5GIVBVJM4UJTKLZEZAWA.jpg"',
    fecha: '2023',
    descripcion: 'huh',
    },
    {
    id: '2',
    nombre: 'Loco rene',
    imagen: '',
    fecha: '2023',
    descripcion: 'huh',
    },
    {
    id: '3',
    nombre: '',
    imagen: '',
    fecha: '2023',
    descripcion: 'huh',
    }
  ]
  constructor() { }

  // METODOS CUSTOM
  getAll() {
    return [...this.personaje]
  }
  // METODO QUE DEVUELVE UN JUGADOR POR EL ID BUSCADO 
  getPersonaje(id: string) {  
    return {
      ...this.personaje.find( aux => {
        return aux.id === id
      })
    }
  }
}
