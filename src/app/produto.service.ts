import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  getproduto(id:number): Observable<Produto>{
    const urlIdproduto = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlIdproduto);
  }

  getprodutos():Observable<Produto[]>{
    return this._httpClient.get<Produto[]>(this.url);
  }

  cadastrarproduto(produto:Produto):Observable<Produto[]>{
    return this._httpClient.post<Produto[]>(this.url, produto);
  }

  atualizaproduto(id:number, produto: Produto):Observable<Produto[]>{
    const urlatualizar =`${this.url}/?${id}`;
    return this._httpClient.put<Produto[]>(urlatualizar, produto);
  }

  removerproduto(id:number):Observable<Produto[]> {
    const urldeletar = `${this.url}/?${id}`;
    return this._httpClient.delete<Produto[]>(urldeletar);
  }
}
