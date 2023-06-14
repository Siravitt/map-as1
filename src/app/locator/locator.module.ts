import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

import { LocatorComponent } from './locator.component';

@NgModule({
  declarations: [LocatorComponent],
  imports: [CommonModule, FormsModule, InputNumberModule, ButtonModule],
  exports: [LocatorComponent]
})
export class LocatorModule {}
