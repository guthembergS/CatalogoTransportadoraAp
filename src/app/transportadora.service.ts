import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

	private baseUrl = '/api/v1/transportadoras';


	constructor(private http: HttpClient) { }

  getTransportadora(id: number): Observable<Object> {
    return this.http.get('${this.baseUrl}/${id}');
  }

  createTransportadora(transportadora: Object): Observable<Object> {
    return this.http.post('${this.baseUrl}', transportadora);
  }

  updateTransportadora(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteTransportadora(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}', { responseType: 'text' });
  }

  getTransportadoraList(): Observable<any> {
    return this.http.get('${this.baseUrl}');
  }


  
}
