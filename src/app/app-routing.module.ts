import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listaestoque', loadChildren: () => import('./listaestoque/listaestoque.module').then(m => m.ListaestoqueModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'listaestoque'
  },

  {
    path: 'produto', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)
  },
  {

  path: '', pathMatch: 'full', redirectTo: 'produto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

