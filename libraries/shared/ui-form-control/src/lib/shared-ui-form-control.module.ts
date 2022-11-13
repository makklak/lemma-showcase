import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormControlComponent } from './form-control.component';

const publicDeclarations = [FormControlComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [CommonModule],
  exports: [...publicDeclarations],
})
export class SharedUiFormControlModule {}
