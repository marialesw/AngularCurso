import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.components.html'
})
export class HeroeComponents{

    nombre: string = 'Ironman';
    edad: number = 45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `
    }
    
    cambiarNombre():void{
        this.nombre = 'Pepito';
    }
    cambiarEdad():void{
        this.edad = 44;
    }

}