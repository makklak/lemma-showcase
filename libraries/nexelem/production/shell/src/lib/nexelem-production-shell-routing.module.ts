import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DashboardComponent,
  NexelemProductionDashboardFeatureModule,
} from '@vl/nexelem/production/dashboard-feature';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NexelemProductionDashboardFeatureModule,
  ],
  exports: [RouterModule],
})
export class NexelemProductionShellRoutingModule {}
