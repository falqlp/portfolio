import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationSubject = new BehaviorSubject<number>(0);
  constructor(private router: Router) {}

  public getNavigation(): Observable<number> {
    return this.navigationSubject.asObservable();
  }

  public updateNavigation(slide: number): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('');
    }
    this.navigationSubject.next(slide);
  }
}
