import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoopInterceptorService implements HttpInterceptor {

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const secureReq = req.clone({
      url:req.url.replace('http://','http://')
    })
    console.log(Date.now())
    return next.handle(secureReq);
  }
}
