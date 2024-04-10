import { Injectable } from '@angular/core';
import { HomeNavigationService } from './home.navigation.service';
import { CalendarNavigationService } from './calendar.navigation.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  static readonly Calendar = 'calendar';

  static readonly Home = 'home';

  get home() {
    return this._home;
  }

  get calendar() {
    return this._calendar;
  }

  constructor(
    private _home: HomeNavigationService,
    private _calendar: CalendarNavigationService
  ) {}

  root(): void {}
}
