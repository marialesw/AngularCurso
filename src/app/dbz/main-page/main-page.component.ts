import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
//valor por defecto
  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 5454
  }

  constructor() {

  }
}
