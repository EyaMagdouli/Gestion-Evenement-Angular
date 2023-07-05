import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { User } from "../model/users.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    /** POST: add a new user to the database */
    getAllUsers(): Observable<User[]> {
        const url = "http://localhost:8080/users"
        return this.httpClient.get<User[]>(url, {})
            .pipe(
                catchError(() =>
                    throwError(() => new Error('Something bad happened; please try again later.')
                    )
                ));
    }
}