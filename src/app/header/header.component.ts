import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHomeMessage: boolean = false;
  showAboutMessage: boolean = false;
  showContactMessage: boolean = false;

  onMouseEnterHome() {
    this.showHomeMessage = true;
  }

  onMouseLeaveHome() {
    this.showHomeMessage = false;
  }

  onMouseEnterAbout() {
    this.showAboutMessage = true;
  }

  onMouseLeaveAbout() {
    this.showAboutMessage = false;
  }

  onMouseEnterContact() {
    this.showContactMessage = true;
  }

  onMouseLeaveContact() {
    this.showContactMessage = false;
  }
}
