import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Capitan America', 'Ironman', 'Thor', 'Hulk']
  heroeBorrado:string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ''; //borra el primer elemento del arreglo y lo retorna
    
  }

  // borrarHeroe(){
  //   if (this.heroes.length != 0) {
  //     let auxH: string[] = [''];
  //     console.log('borrando...');
  //     for (let i = 0; i < this.heroes.length; i++) {
  //       console.log(this.heroes[i]);
  //       if (this.heroes[i] != this.heroes[this.heroes.length - 1]) {
  //         auxH[i] = this.heroes[i];
  //       }
  //     }
  //     this.heroes = auxH;
  //   }else{
  //     console.log('se acabaron los heroes')
  //   }
  // }
}
