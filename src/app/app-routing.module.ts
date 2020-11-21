import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './test/not-found/not-found.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test'
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

const extraOptions: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRouteModule {}
