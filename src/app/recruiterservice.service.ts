import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterserviceService {
  baseUrl = 'http://localhost:8083';
  constructor(private http: HttpClient) { }

  getAllRecruiter(): any {
    return this.http.get(`${this.baseUrl}/getAll`);
  }


  deleteRecruiter(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getOneRecruiter(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }


  updateDetails(recruiter: object) {
    return this.http.put(`${this.baseUrl}/update`, recruiter);
  }


  createRecruiter(recruiter: Object): Observable<Object> {
    console.log(recruiter);
    return this.http.post(`${this.baseUrl}/add`, recruiter);
  }

}



