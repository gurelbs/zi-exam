import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../types';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  status = new BehaviorSubject<boolean>(false);

  constructor(public readonly http: HttpClient,
              public readonly router: Router) {
    this.notify();
  }

  login(model: LoginModel) {
    this.http.put<{ token: string }>('/api/login', model).subscribe(res => {
      const token = res.token;
      if (token) {
        localStorage.setItem('token', token);
        this.notify();
      }
      return this.router.navigate(['/']);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.notify();
    return this.router.navigate(['/']);
  }

  notify() {
    const token = localStorage.getItem('token');
    this.status.next(!!token);
  }
}
