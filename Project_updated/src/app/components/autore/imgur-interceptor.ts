import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ImgurInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const imgurToken = "d4e418b1180149c2f908769861db2fa0d6a60ec2"
    const imgurRequest = req.clone({
      headers: req.headers.set('Authorization', " Bearer " + imgurToken)
    });
    return next.handle(imgurRequest);
  }
}
