import { Component, OnInit } from '@angular/core';
import { tabelaestoque } from 'src/app/core/model';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})

export class EstoqueComponent implements OnInit {

  listaestoque: tabelaestoque [] = [
    { id: 1, nomeestoque: 'x' },
    { id: 2, nomeestoque: 'x' },
    { id: 3, nomeestoque: 'x' },
    { id: 4, nomeestoque: 'x' },
    { id: 5, nomeestoque: 'x' }
  ]

  displayedColumns: string[] = ['id', 'nomeestoque']

  constructor() { }

  ngOnInit(): void {
  }

}
