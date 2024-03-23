import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
    ]
  }
];
