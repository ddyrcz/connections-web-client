import { Component, OnInit } from '@angular/core';
import { GrowlService } from 'app/core/growl/growl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public growl: GrowlService) {
  }
}
