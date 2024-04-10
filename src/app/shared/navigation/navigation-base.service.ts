import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationBase {
  constructor(private router: Router) {}

  nagivate(url: string): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }
}
