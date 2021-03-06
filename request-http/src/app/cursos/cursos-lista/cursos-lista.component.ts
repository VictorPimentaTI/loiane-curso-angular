import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[];

  cursos$: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit(): void
  {
    //this.service.list()
    //.subscribe(dados => this.cursos = dados);

    this.cursos$ = this.service.list();
  }

  onRefresh()
  {
    this.cursos$ = this.service.list();
  }
}
