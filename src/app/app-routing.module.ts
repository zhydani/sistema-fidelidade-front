import { HomeClientePageComponent } from './pages/home-cliente/containers/home-cliente-page/home-cliente-page.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: 'homecliente',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: HomeClientePageComponent
  },
  {
    path: 'funcionario',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/funcionario/funcionario.module').then(m => m.FuncionarioModule)
  },
  {
    path: 'cliente',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'categoria',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaModule)
  },

  {
    path: 'produto',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'pontuacao',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pontuacao/pontuacao.module').then(m => m.PontuacaoModule)
  },
  {
    path: 'promocao',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/promocao/promocao.module').then(m => m.PromocaoModule)
  },
  // {
  //   path: 'resgate',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/resgate/resgate.module').then(m => m.ResgateModule)
  // },
  {
    path: 'tables',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'ui',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
