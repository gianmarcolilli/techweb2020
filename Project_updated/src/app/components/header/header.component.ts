import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  showFiller = false;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  @Input('my-title') myTitle: string;

  constructor(private authService: AuthService, private router: Router) { }

  navigateToHome() {
    this.router.navigateByUrl("home")
  }

  navigateToAutore() {
    this.router.navigateByUrl("autore")
  }

  navigateToPlayer() {
    this.router.navigateByUrl("player")
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
