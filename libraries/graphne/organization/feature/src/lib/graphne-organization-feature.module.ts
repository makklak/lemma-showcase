import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedUiFormControlModule } from '@vl/shared/ui-form-control';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const publicDeclarations = [DashboardComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [CommonModule, SharedUiFormControlModule],
  exports: [...publicDeclarations],
})
export class GraphneOrganizationFeatureModule {}
