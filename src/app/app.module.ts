import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';
@NgModule({
  declarations: [
    // componentes
    AppComponent
  ],
  imports: [
    // otros modulos
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],     // servicios especificos a un modulo

  bootstrap: [AppComponent]
})
export class AppModule { }
