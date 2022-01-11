import { Injectable } from '@angular/core';
import {ITask} from "../ITask";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";//This is similar to fetch API
//Also import this to app.module

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiURL: string ="http://localhost:3000/tasks"
  constructor(private http: HttpClient) { }

  getTasks():Observable<ITask[]>{
   return this.http.get<ITask[]>(this.apiURL);
  }
  deleteTask(task: ITask):Observable<ITask>{
    const url=`${this.apiURL}/${task.id}`;
    return this.http.delete<ITask>(url);
  }

  updateTaskReminder(task: ITask):Observable<ITask>{
    const url=`${this.apiURL}/${task.id}`;
    return this.http.put<ITask>(url,task,httpOptions);
  }

  addTask(task:ITask):Observable<ITask>{
    return  this.http.post<ITask>(this.apiURL,task,httpOptions);
  }

}
