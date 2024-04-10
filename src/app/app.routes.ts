import { Routes } from '@angular/router';
import { HOME_ROUTES } from './pages/home/home.routes';
import { CALENDAR_ROUTES } from './pages/calendar/calendar.routes';
import { NavigationService } from './shared/navigation/navigation.service';

export const routes: Routes = [
  ...HOME_ROUTES,
  ...CALENDAR_ROUTES,
  {
    path: `**`,
    redirectTo: `/${NavigationService.Home}`,
  },
];
