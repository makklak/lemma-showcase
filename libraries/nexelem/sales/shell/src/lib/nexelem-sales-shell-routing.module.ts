import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DashboardComponent,
  NexelemSalesDashboardFeatureModule,
} from '@vl/nexelem/sales/dashboard-feature';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NexelemSalesDashboardFeatureModule],
  exports: [RouterModule],
})
export class NexelemSalesShellRoutingModule {}
