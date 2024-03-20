import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCustomPagePage } from './my-custom-page.page';
import { MyCustomPageWithId } from './my-custom-page-with-id/my-custom-page-with-id';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPagePage
  },
  {
    path: 'my-custom-page-with-id/:id',
    component: MyCustomPageWithId
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPagePageRoutingModule {}
