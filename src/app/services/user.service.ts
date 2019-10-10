import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';
import { createAuthHeaders } from '../helpers/authHeadersHelper';
import { Router } from '@angular/router';

const USER_DATA_KEY = 'user_data';

export type UserType = {
  lastName: string,
  firstName: string,
  email: string,
  access_token: string,
  isAdmin: boolean,
}

type UserSignUpType = {
  lastName: string,
  firstName: string,
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: UserType | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService,
  ) {
    this.init();

  }

  private init() {
    const userDataString = this.storageService.getItem(USER_DATA_KEY);
    if (!userDataString) {
      return;
    }
    const userData = JSON.parse(userDataString);
    if (!userData.access_token) {
      this.storageService.removeItem(USER_DATA_KEY);
      return;
    }

    this.currentUser = userData;
    this.http.get(environment.apiHost + '/ping', {
      headers: createAuthHeaders(userData.access_token),
    })
      .pipe(
        catchError(() => {
          this.logOut();
          return of(false);
        })
      )
      .subscribe();
  }

  private setCurrentUser(user: UserType) {
    this.currentUser = user;
    this.storageService.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  public isAdmin(): boolean {
    return this.currentUser && this.currentUser.isAdmin;
  }

  public isLogIn(): boolean {
    return !!(this.currentUser && this.currentUser.access_token);
  }

  public getAuthToken(): string | null {
    return (this.currentUser && this.currentUser.access_token)
      ? this.currentUser.access_token
      : null;
  }

  public logIn(email, password) {
    return this.http.post(environment.apiHost + '/login', { email, password }).pipe(
      map((res) => {
        this.setCurrentUser(res as UserType);
        return res;
      })
    )
  }

  public signUp(user: UserSignUpType) {
    return this.http.post(environment.apiHost + '/sign-up', user).pipe(
      map((res) => {
        this.setCurrentUser(res as UserType);
        return res;
      })
    );
  }

  public logOut() {
    this.currentUser = null;
    this.storageService.removeItem(USER_DATA_KEY);
    this.router.navigate(['/login']);
    return true;
  }
}
