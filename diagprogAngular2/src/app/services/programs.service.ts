import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProgramsComponent } from '../programs/programs.component';
import { Program } from '../models/program';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {



  constructor(private http: HttpClient) { }

  private programs: Program[] = [];

  getAll(): Observable<Program[]> {

    return this.http.get<Program[]>(
      `${environment.apiUrl}program/programs`,
      httpOptions
    );

  }
}