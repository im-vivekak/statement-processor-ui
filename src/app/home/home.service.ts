import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  validateFile(file: File) {
    const headers = {
      'api-key': 'ItsTheApikeyTOConsumeThevalidateService',
      'Access-Control-Allow-Origin':'*'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headers), 
    };
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/statement/api/validate`, formData, requestOptions);
  }
}
