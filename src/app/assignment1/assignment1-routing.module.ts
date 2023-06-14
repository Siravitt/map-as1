import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { PetfolioComponent } from './petfolio/petfolio.component';

const routes: Routes = [
  {
    path: '1',
    component: ColorComponent,
  },
  {
    path: '2',
    component: PetfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assignment1RoutingModule {}
