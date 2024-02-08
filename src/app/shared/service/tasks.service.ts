import { Injectable, inject } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { TaskModel } from "../model/task.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    API_URL = 'api/tasks';
    http = inject(HttpClient);

    getTasks():Observable<TaskModel[]>{
        return this.http.get<TaskModel[]>(this.API_URL).pipe(tap(() => console.log('fetched data')), map(res => res));
    }
}