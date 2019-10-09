import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
    private http: HttpClient
  ) { }

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
        this.currentUser = <UserType>res;
        return res;
      })
    )
  }

  public signUp(user: UserSignUpType) {
    return this.http.post(environment.apiHost + '/sign-up', user).pipe(
      map((res) => {
        this.currentUser = <UserType>res;
        return res;
      })
    );
  }
}
