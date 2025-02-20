import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private _HttpClient:HttpClient
) { }

onGetCustomers(): Observable<any> {
    return this._HttpClient.get('http://localhost:3000/customers')
}
onGetTransactions(): Observable<any> {
    return this._HttpClient.get('http://localhost:3000/transactions')
}
}
