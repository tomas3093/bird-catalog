import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  performCall<TResponse>(
    f: () => Observable<TResponse>
  ): Observable<Readonly<TResponse>> {
    return f().pipe(delay(250)); // Add some error handling in case of real api call
  }
}
