import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FiltroPipe } from './filtro.pipe';
import { DiasHastaPipe } from './dias-hasta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesComponent,
    TablaComponent,
    FiltroPipe,
    DiasHastaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
