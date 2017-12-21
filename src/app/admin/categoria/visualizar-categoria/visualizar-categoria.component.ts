import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-visualizar-categoria',
  templateUrl: './visualizar-categoria.component.html',
  styleUrls: ['./visualizar-categoria.component.css']
})
export class VisualizarCategoriaComponent {

  public id: any;
  public categoria: Categoria;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param service
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.categoriaService.getCategoria(this.id).subscribe(
      response => { this.categoria = response.content; },
      error => console.log(error)
    );
  }
}
