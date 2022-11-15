import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedUiButtonModule } from '@vl/shared/ui-button';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const publicDeclarations = [DashboardComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [CommonModule, SharedUiButtonModule],
  exports: [...publicDeclarations],
})
export class NexelemSalesDashboardFeatureModule {}
