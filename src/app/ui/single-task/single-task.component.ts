import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TaskModel, TaskTypeENUM, TaskTypeIconModelList } from '../../shared/model/task.model';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [MatBadgeModule, CommonModule, MatIconModule],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent implements OnInit, OnChanges{  
  public iconName:string| undefined = '';
  @Input() taskItem!:TaskModel;
  @Output() sendBack = new EventEmitter<TaskModel>();

  ngOnInit(): void { 
    console.log(' in Single Task comp', this.taskItem.taskType)
    this.getIconName(this.taskItem.taskType);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes : ', changes, changes['taskItem'].currentValue.taskType);
    this.getIconName(changes['taskItem'].currentValue.taskType);
  }

  getIconName(value:TaskTypeENUM){
    console.log('Value passed', value);    
    this.iconName = TaskTypeIconModelList.find(x => x.taskType === value)?.iconName;
    if (this.iconName == null){
      this.iconName = 'Could not find';
    }
    console.log('iconName found : ', this.iconName);
  }
  sendToParent(){
    this.sendBack.emit(this.taskItem);
  }
}
