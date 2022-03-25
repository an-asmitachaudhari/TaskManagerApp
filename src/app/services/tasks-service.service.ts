import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  RegisterUser(register: Register): Observable<any> {
    return this.http.post(`${this.url}/user/register`, register);
  }

  userLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}/user/login`, data);
  }

  /*findUserByEmail(value: any): Observable<any> {
    return this.http.get(`${this.url}/user/register`, value);
  }*/

  emailCheckUnique(email: any) {
    return this.http.post(`${this.url}/user/email`, email);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(`${this.url}/user/addTask`, task);
  }
}
