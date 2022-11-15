import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const publicDeclarations = [DashboardComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [CommonModule],
  exports: [...publicDeclarations],
})
export class GraphneSchedulingFeatureModule {}
