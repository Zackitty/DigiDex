import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from '../configs/routes.config';

const routes: Routes = [
  { path: '', 
    redirectTo: RoutesConfig.routeNames.home, pathMatch: 'full' 
  },
  { path: RoutesConfig.routes.home,
    loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule),
  },
  {  
    path: RoutesConfig.basePaths.auth,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: RoutesConfig.basePaths.digimon,
    loadChildren: () => import('./modules/digimon/digimon.module').then(m => m.DigimonModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
