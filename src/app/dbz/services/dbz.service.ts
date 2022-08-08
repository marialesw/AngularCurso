import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
 
@Injectable()
export class DbzService{
    //propiedad privada _p no quiero que en ninguna lado manipulen mi arreglo
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }, {
          nombre: 'Goku4',
          poder: 1500
        }
      ]; 

      get personajes(): Personaje[]{
          return [...this._personajes]; // Rompe la referenncia con los personajes
      }
    
    constructor(){
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
    
}