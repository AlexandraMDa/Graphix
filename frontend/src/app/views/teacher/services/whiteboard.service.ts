import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  private url = `${environment.API_BASE}/Whiteboard`;

  constructor(private http: HttpClient) { }

  public getWhiteboardForTeacher(): Observable<any> {
    return this.http.get(`${this.url}/for-teacher`);
  }

  public postWhiteboard(whiteboardSVG: string, whiteboardName: string): Observable<any> {
    let body = {
      name: whiteboardName,
      content: whiteboardSVG
    };
    return this.http.post(`${this.url}/Whiteboard`, body);
  }
}
