import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment1RoutingModule } from './assignment1-routing.module';
import { ColorComponent } from './color/color.component';
import { PetfolioComponent } from './petfolio/petfolio.component';

@NgModule({
  declarations: [
    ColorComponent,
    PetfolioComponent,
  ],
  imports: [CommonModule, Assignment1RoutingModule],
})
export class Assignment1Module {}
