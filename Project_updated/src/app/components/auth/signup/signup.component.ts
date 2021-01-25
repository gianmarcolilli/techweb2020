import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  isLoading=false;
  titolo:string='Signup'
  private authStatusSub: Subscription;

  constructor(public authService:AuthService){}

  // ngOnInit() {
  //   this.authStatusSub =  this.authService.getAuthStatusListener().subscribe(
  //     authStatus => {
  //       this.isLoading= false;
  //     });
  // }

  // ngOnDestroy(){
  //   this.authStatusSub.unsubscribe();
  // }

  //per creare un nuovo profilo tramite authService, dopo aver controllato la validità
  onSignup(form: NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading=true;
    this.authService.createUser(form.value.email, form.value.password);
  }
}
