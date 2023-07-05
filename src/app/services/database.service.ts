import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AppUser } from "../model/app-user.model";
import { Database } from "../model/databases.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private httpClient: HttpClient) { }

    /** GET */
    getDatabases(): Observable<Database[]> {
        const url = "http://localhost:8080/databases"
        return this.httpClient.get<Database[]>(url, {})
            .pipe(
                catchError(() =>
                    throwError(() => new Error('Something bad happened; please try again later.')
                    )
                ));
    }
}