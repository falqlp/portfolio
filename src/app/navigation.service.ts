import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationSubject = new BehaviorSubject<number>(0);

  public getNavigation(): Observable<number> {
    return this.navigationSubject.asObservable();
  }

  public updateNavigation(slide: number): void {
    this.navigationSubject.next(slide);
  }
}
