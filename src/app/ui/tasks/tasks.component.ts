import { Component, inject } from '@angular/core';
import { TaskService } from '../../shared/service/tasks.service';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TaskFrequencyENUM, TaskModel, TaskTypeENUM, TimeEstimateENUM } from '../../shared/model/task.model';
import {MatBadgeModule} from '@angular/material/badge';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { SingleTaskComponent } from '../single-task/single-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe, MatCardModule, SingleTaskComponent, AsyncPipe, CommonModule, NgFor, NgForOf, MatBadgeModule, EditTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  todayDate = new Date();
  taskList: TaskModel[] = [];
  colorFlag = 'red';
  selectedItem:TaskModel =  {id:1, task:'Read 30 pages of "FEEL GOOD PRODUCTIVITY" book', startDate: '02/07/2024', 
  endDate: '02/15/2024', frequency: TaskFrequencyENUM.DAILY, 
  taskType: TaskTypeENUM.SELF_IMPROVEMENT, estimatedTime:TimeEstimateENUM.ONE_HOUR,
  actualTime:0 };
  taskService = inject(TaskService);

  public data = this.taskService.getTasks().subscribe(x => {
    console.log('Received data from api', x);
    this.taskList = x;
  })

  getStyle(item: TaskModel) {
    return (item.taskType).trim().toLowerCase();
  }

  cameFromChild(data:TaskModel){
    this.selectedItem = data;
  }
  
  showItemDetail(item:TaskModel){
    this.selectedItem = item;
  }

}
