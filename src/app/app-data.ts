import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { IAPIDataModel } from "./shared/model/api-data.model";
import { TaskModel, TaskModelList, TaskStatusModel, TaskStatusModelList } from "./shared/model/task.model";

export class AppData implements InMemoryDbService{
    createDb(): IAPIDataModel{
        const taskModelList: TaskModel[] = TaskModelList;
        const taskStatusModelList: TaskStatusModel[] =TaskStatusModelList;
        return {
            tasks: taskModelList, 
            taskDetails: taskStatusModelList
        }
    }
}