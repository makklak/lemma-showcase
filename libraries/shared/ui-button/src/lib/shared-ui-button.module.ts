import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';

const publicDeclarations = [ButtonComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [CommonModule],
  exports: [...publicDeclarations],
})
export class SharedUiButtonModule {}
