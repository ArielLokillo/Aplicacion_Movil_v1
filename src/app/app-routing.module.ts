import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'personajes',
    children: [
        {
          path: "",
          loadChildren: () => import('./pages/personajes/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
        },
        {
          path: ':id',
          loadChildren: () => import('./pages/personajes/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
        },
    ]
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CATEGORIAPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CARGANDOPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./pages/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/personajes/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'equipo',
    loadChildren: () => import('./pages/equipo/equipo.module').then( m => m.EquipoPageModule)
  },
  {
    path: 'rango',
    loadChildren: () => import('./pages/rango/rango.module').then( m => m.RangoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
