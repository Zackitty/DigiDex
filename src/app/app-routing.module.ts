import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { root } from 'cheerio/lib/static';
import { RoutesConfig } from '../configs/routes.config';
import { DigimonDetailsComponent } from './modules/digimon/components/digimon-details/digimon-details.component';
import { HomePageComponent } from './modules/root/pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  // { path: RoutesConfig.routes.home,
  //   loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule),
  // },
  // {  
  //   path: RoutesConfig.basePaths.auth,
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  // },
  // {
  //   path: RoutesConfig.basePaths.hero,
  //   loadChildren: () => import('./modules/digimon/digimon.module').then(m => m.DigimonModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
