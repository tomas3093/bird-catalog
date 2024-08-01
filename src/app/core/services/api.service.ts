import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);

  performCall<TResponse>(f: () => Observable<TResponse>): Observable<Readonly<TResponse>> {
    return f().pipe(delay(250)); // Add some error handling in case of real api call
  }

  getRequest<TResponse>(url: string) {
    return this.performCall<TResponse>(() => this.#http.get<TResponse>(url));
  }
}
