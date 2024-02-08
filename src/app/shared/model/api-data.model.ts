import { TaskModel, TaskStatusModel } from "./task.model";

export interface IAPIDataModel{
    tasks: TaskModel[];
    taskDetails: TaskStatusModel[];   
}
