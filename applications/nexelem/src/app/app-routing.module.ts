import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sales',
    pathMatch: 'full',
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('@vl/nexelem/sales/shell').then((m) => m.NexelemSalesShellModule),
  },
  {
    path: 'production',
    loadChildren: () =>
      import('@vl/nexelem/production/shell').then(
        (m) => m.NexelemProductionShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
