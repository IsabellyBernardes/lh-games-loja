import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from 'src/app/produto.service';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  public produto: Produto = new Produto(0, "", "", "", 0);
  router: any;
  constructor(private _produtoService: ProdutoService, privaterouter: Router) { }
  ngOnInit(): void {
  }
  cadastrar() {
    this._produtoService.cadastrarproduto(this.produto).subscribe(produto => {
      this.produto = new Produto(0, "", "", "", 0);
      alert("Cadastro Efetuado com Sucesso")
    },
      err => {
        alert("erro ao cadastrar")
      }
    );
    this.router.navigate(["/restrito/lista"]);
  }
}