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
    // const authToken = this.authService.getToken();
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5pdCIsInVzZXJJZCI6IjVmYmZkM2YwZGUwNjRiMzRhNDE4ZTJkYiIsImlhdCI6MTYxMTA3MjA3NSwiZXhwIjoxNjExMDc1Njc1fQ.dLyXbhY_q6ptcBZP226Y3IP8Ds1d0eNJN096C_3MhEE"
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
