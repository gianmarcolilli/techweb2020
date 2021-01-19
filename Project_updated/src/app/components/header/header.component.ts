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

//navigazione verso HomePage
  navigateToHome() {
    this.router.navigateByUrl("home")
  }

  //navigazione verso component autore
  navigateToAutore() {
    this.router.navigateByUrl("autore")
  }

  //navigazione verso component player
  navigateToPlayer() {
    this.router.navigateByUrl("player")
  }

  ngOnInit() {
    //per eseguire l'autenticazione
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  //per eseguire logout da autore
  onLogout() {
    this.authService.logout();
  }

  //completa il logout tramite unsubscribe
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
