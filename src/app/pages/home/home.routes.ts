import { Route } from '@angular/router';
import { NavigationService } from '../../shared/navigation/navigation.service';

export const HOME_ROUTES: Route[] = [
  {
    path: `${NavigationService.Home}`,
    loadComponent: () => import('./home.page').then((m) => m.HomePage),
  },
];
