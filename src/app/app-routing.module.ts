import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';

const routes: Routes = [
  {
    path: '1',
    loadChildren: () =>
      import('./assignment1/assignment1-routing.module').then(
        (m) => m.Assignment1RoutingModule
      ),
  },
  {
    path: '2',
    component: Assignment2Component,
  },
  {
    path: '3',
    component: Assignment3Component,
  },
  {
    path: '4',
    component: Assignment4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
