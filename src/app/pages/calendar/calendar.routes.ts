import {Route} from '@angular/router';
import {NavigationService} from '../../shared/navigation/navigation.service';

export const CALENDAR_ROUTES: Route[] = [
  {
    path: `${NavigationService.Calendar}`,
    loadComponent: () =>
      import('./calendar.page').then((m) => m.CalendarPage),
  },
];
