import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scheduling',
    pathMatch: 'full',
  },
  {
    path: 'scheduling',
    loadChildren: () =>
      import('@vl/graphne/scheduling/shell').then(
        (m) => m.GraphneSchedulingShellModule
      ),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('@vl/graphne/organization/shell').then(
        (m) => m.GraphneOrganizationShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
