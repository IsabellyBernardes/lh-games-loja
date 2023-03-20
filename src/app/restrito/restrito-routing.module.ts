import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { MenuRestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';

const routes: Routes = [
    {
        path: 'restrito', component: MenuRestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] },
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard] },
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] },
        ]

    },
    
    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }