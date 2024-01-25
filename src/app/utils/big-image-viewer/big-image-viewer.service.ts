import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BigImageViewerService {
  protected imgSubject = new BehaviorSubject<string>('');
  public setImage(imageUrl: string): void {
    this.imgSubject.next(imageUrl);
  }

  public getImage(): Observable<string> {
    return this.imgSubject.asObservable();
  }
}
