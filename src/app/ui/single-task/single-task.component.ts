import { Component, Input } from '@angular/core';
import { TaskModel } from '../../shared/model/task.model';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {
  @Input() taskItem!:TaskModel;
}
