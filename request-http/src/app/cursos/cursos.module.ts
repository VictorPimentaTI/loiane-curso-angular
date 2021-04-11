import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
