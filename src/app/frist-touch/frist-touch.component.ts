import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-frist-touch',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './frist-touch.component.html',
  styleUrl: './frist-touch.component.css'
})
export class FristTouchComponent {

}
