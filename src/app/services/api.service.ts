import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { createAuthHeaders } from '../helpers/authHeadersHelper';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {

  }

  public get(path: string, options = {}) {
    return this.http.get(environment.apiHost + path, {
      ...options,
      headers: createAuthHeaders(this.userService.getAuthToken()),
    })
      .pipe(
        tap(
          () => { },
          () => { this.userService.logOut(); }
        )
      );
  }

  public delete(path: string, options = {}) {
    return this.http.delete(environment.apiHost + path, {
      ...options,
      headers: createAuthHeaders(this.userService.getAuthToken()),
    })
      .pipe(
        tap(
          () => { },
          () => { this.userService.logOut(); }
        )
      );
  }


}
