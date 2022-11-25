import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {


  produto: Produtos [] = [
    { idproduto: 1, nomeproduto: 'Blusa Feminina' },
    { idproduto: 2, nomeproduto: 'Calça Jeans Feminina' },
    { idproduto: 3, nomeproduto: 'Camisa Masculina' },
    { idproduto: 4, nomeproduto: 'Vestido Estampado' },
    { idproduto: 5, nomeproduto: 'Moletom Masculino' }
  ]


  displayedColumns: string[] = ['idproduto', 'nomeproduto']

  constructor() { }

  ngOnInit(): void {
  }

}
