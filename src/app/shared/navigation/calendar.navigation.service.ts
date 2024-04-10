import { Injectable } from '@angular/core';
import { NavigationBase } from './navigation-base.service';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarNavigationService {
  static readonly baseUrl = () => `${NavigationService.Calendar}`;

  constructor(private nav: NavigationBase) {}

  root(): void {
    this.nav.nagivate(CalendarNavigationService.baseUrl());
  }
}
