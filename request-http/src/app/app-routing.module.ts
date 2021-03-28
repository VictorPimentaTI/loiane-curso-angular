import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosRoutes } from './cursos/cursos-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cursos'
  },
  ...CursosRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
