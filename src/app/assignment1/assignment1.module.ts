import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment1RoutingModule } from './assignment1-routing.module';
import { ColorComponent } from './color/color.component';
import { PetfolioComponent } from './petfolio/petfolio.component';
import { CommentSimulatorComponent } from './comment-simulator/comment-simulator.component';


@NgModule({
  declarations: [
    ColorComponent,
    PetfolioComponent,
    CommentSimulatorComponent
  ],
  imports: [
    CommonModule,
    Assignment1RoutingModule
  ]
})
export class Assignment1Module { }
