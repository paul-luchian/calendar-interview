import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {NavigationService} from "./shared/navigation/navigation.service";

interface MenuItem {
  label: string,
  path: string,
  icon: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDrawerContainer, MatDrawerContent, MatDrawer, MatIcon, MatToolbar, MatIconButton, MatDivider, MatNavList, NgIf, MatListItem, MatListItemIcon, MatListItemTitle, RouterLink, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuItems: MenuItem[] = []

  constructor() {
    this.menuItems = this.buildMenuItems();
  }

  private buildMenuItems(): MenuItem[] {
    return [
      {
        path: `${NavigationService.Home}`,
        icon: 'home',
        label: 'Home'
      },
      {
        path: `${NavigationService.Calendar}`,
        icon: 'calendar_month',
        label: 'Calendar'
      },
    ]
  }
}
