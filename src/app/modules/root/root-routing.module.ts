import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutesConfig } from '../../../configs/routes.config';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

const routeNames = RoutesConfig.routeNames;

const rootRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: routeNames.error404, component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rootRoutes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
