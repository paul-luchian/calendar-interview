import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { NavigationBase } from './navigation-base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeNavigationService {
  static readonly baseUrl = () => `${NavigationService.Home}`;

  constructor(private nav: NavigationBase) {}

  root(): void {
    this.nav.nagivate(HomeNavigationService.baseUrl());
  }
}
