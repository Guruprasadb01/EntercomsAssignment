import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }


    getOrders() {
        return this.http.get<any>(`http://localhost:3000/orders`)
            .pipe(map(data => {
                return data;
            }));
    }

    getReceivings() {
        return this.http.get<any>(`http://localhost:3000/receivings`)
            .pipe(map(data => {
                return data;
            }));
    }

}