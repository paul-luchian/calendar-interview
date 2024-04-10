import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    MatIcon
  ]
})
export class HomePage {
}
