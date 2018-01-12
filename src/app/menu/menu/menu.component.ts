import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { AuthService } from 'app/core/http/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public applicationData: ApplicationDataService,
    public auth: AuthService) { }

  ngOnInit() {
  }

  logoClicked() {
    this.scrollToTop()
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
