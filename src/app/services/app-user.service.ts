import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AppUser } from "../model/app-user.model";

@Injectable({
    providedIn: 'root'
})
export class AppUserService {

    constructor(private httpClient: HttpClient) { }

    /** POST: add a new user to the database */
    addUser(user: AppUser): Observable<AppUser> {
        const url = "http://localhost:8080/app-user"
        return this.httpClient.post<AppUser>(url, user, {})
            .pipe(
                catchError(() =>
                    throwError(() => new Error('Something bad happened; please try again later.')
                    )
                ));
    }
}