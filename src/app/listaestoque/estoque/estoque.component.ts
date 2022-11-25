import { Component, OnInit } from '@angular/core';
import { tabelaestoque } from 'src/app/core/model';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})

export class EstoqueComponent implements OnInit {

  listaestoque: tabelaestoque [] = [
    { id: 1, nomeestoque: 'Blusa' },
    { id: 2, nomeestoque: 'Calça' },
    { id: 3, nomeestoque: 'Camisa' },
    { id: 4, nomeestoque: 'Vestido' },
    { id: 5, nomeestoque: 'Moletom' }
  ]

  displayedColumns: string[] = ['id', 'nomeestoque']

  constructor() { }

  ngOnInit(): void {
  }

}
