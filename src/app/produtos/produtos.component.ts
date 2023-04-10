import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  
  produtos: IProduto[] | undefined;
  
  constructor (
    private produtosService: ProdutosService,
    private router: ActivatedRoute
    ){}
  
  
    ngOnInit(): void {
      const produtos = this.produtosService.getAll();
      this.router.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
  
        if (descricao) {
          this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
          return;
        }
  
        this.produtos = produtos;
      });
  }



}
