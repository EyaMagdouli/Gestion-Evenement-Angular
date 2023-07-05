import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Admin } from "../model/admin.model";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    /** POST: add a new user to the database */
    getAllAdmin(): Observable<Admin[]> {
        const url = "http://localhost:8080/users"
        return this.httpClient.get<Admin[]>(url, {})
            .pipe(
                catchError(() =>
                    throwError(() => new Error('Something bad happened; please try again later.')
                    )
                ));
    }
}