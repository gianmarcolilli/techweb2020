import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authToken;

    if(req.url.includes('imgur')){
      authToken = "d4e418b1180149c2f908769861db2fa0d6a60ec2"
    }else {
      authToken = this.authService.getToken();
    }

    //setto un extra header a quelli gia presenti
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
