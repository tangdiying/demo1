    import { Injectable } from '@angular/core';
    import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
    import { Observable, of } from 'rxjs';
    import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
    @Injectable()
    export class CanDeactivateGuard implements CanDeactivate<any> {
        constructor(public http:HttpClient){}
        canDeactivate(
            component: any,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log(route)
            console.log(state)
            return component.getdata().pipe(map(res=>{
                if(!res["data"].length){
                    return true
                }else{
                    return window.confirm("请问是否离开网站？？")
                }
            }))
        }
    }