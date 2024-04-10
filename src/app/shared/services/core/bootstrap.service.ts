import { Injectable } from '@angular/core';
import { NavigationService } from '../../navigation/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class BootstrapService {
  constructor(private _nav: NavigationService) {}

  init(): void {}
}
