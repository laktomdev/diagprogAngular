import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Program } from '../models/Program/program';
import { programMenuPositions } from '../models/Program/programMenuPositions/programMenuPositions';
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
  getById(id: number | string): Observable<Program> {
    return this.http.get<Program>(
      `${environment.apiUrl}program/programpricing/${id}`, httpOptions
    );
  }
  getCableAndMenuPositions(id: number | string): Observable<programMenuPositions> {
    return this.http.get<programMenuPositions>(
      `${environment.apiUrl}program/getprogrammenupositions/${id}`, httpOptions
    );
  }
  
}
