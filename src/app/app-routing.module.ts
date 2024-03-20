import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPage } from './another/another.page';
import { AuthorizationService } from './authorization.service';
import { SharedPage } from './shared/shared.component';
import { thirdPage } from './third page/third.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom-page.module').then( m => m.MyCustomPagePageModule)
  },
  {
    path: 'another',
    component: AnotherPage,
    canActivate : [AuthorizationService]
  },
  {
    path: 'third page',
    component: thirdPage,
    canActivate : [AuthorizationService]
  },
  {
    path: 'shared',
    component: SharedPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
