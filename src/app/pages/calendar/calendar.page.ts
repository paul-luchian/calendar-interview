import {Component} from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer, MatSidenavContent
} from "@angular/material/sidenav";
import {MatCalendar, MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatDatepickerModule,
    MatIcon,
    MatIconButton,
    MatDivider,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    NgIf,
    NgClass,
    NgForOf
  ],
  providers: [provideNativeDateAdapter()],
})
export class CalendarPage {
  selectedDate: Date = new Date();
  sideNavExpanded = true;

  hoursRange = [].constructor(24).fill().map((_: undefined, i: number) => i);
}
