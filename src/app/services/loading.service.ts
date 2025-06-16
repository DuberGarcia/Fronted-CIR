import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = signal<boolean>(false);
  

  show() {
    this.loading.set(true);
    console.log(this.loading())
  }

  hide() {
    this.loading.set(false);
    console.log(this.loading())
  }
}
