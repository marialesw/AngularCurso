import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponents } from './heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponents,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
     CommonModule //ofrece las directivas como ngIf, ngFor
    ]
})
export class HeroesModule{

}