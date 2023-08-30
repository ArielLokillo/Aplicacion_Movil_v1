import { Injectable } from '@angular/core';
import { Personaje } from '../pages/personajes/personajes.models';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes: Personaje[] = [
    {
      id: "1",
      nombre: "Sebastian Henriquez",
      imagen: "https://resizer.glanacion.com/resizer/v2/tirone-jose-gonzalez-alias-canserbero-un-rapero-VBNBHW5GIVBVJM4UJTKLZEZAWA.jpg?auth=cbb10a3ed5cd011c9ad9dcd8d15548acc729834364d1fd89ee1cf03add343ce1&width=768&quality=70&smart=false",
      fecha: "2023",
      descripcion: "AAAAAAAAAAA",
    },
    {
      id: "2",
      nombre: "Ariel Saavedra",
      imagen: "https://cdn-3.expansion.mx/dims4/default/1308750/2147483647/strip/true/crop/1125x591+0+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F01%2Fd9%2F38db964e40a5bf4167c85f487a96%2Felwbeczvoaissv9.jpg",
      fecha: "2023",
      descripcion: "BBBBBBBBBB",
    },
    {
      id: "3",
      nombre: "Nolosexd",
      imagen: "https://previews.123rf.com/images/frender/frender1609/frender160900265/62342154-signo-de-interrogaci%C3%B3n-y-el-hombre-3d-aislado-en-el-fondo-blanco.jpg",
      fecha: "2023",
      descripcion: "CCCCCCCCC",
    },
  ]
  constructor() { }

  //METODOS CUSTOM
  // METODO QUE DEVUELVE OBJETO COMPLETO
  getAll() {
    return [...this.personajes]
  }

  //METODO QUE DEVUELVE UN JUGADOR POR EL ID BUSCADO
  getPersonaje(id: string) {
    return {
      ...this.personajes.find( aux => {
        return aux.id === id
      })
    }
  }
}
