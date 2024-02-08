import { Component, Input, OnInit, inject } from '@angular/core';
import { TaskFrequencyENUM, TaskModel, TaskStatusENUM } from '../../shared/model/task.model';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatBadgeModule, NgFor, MatOptionModule, MatSelectModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit{
  @Input() taskItem!:TaskModel;
  fb = inject(FormBuilder);
  public editTaskFormGroup = this.fb.group({
    taskId: new FormControl(0),
    task: new FormControl(''),
    timePlanned: new FormControl(''),
    timeActual: new FormControl(0),
    status:new FormControl(''),
    notes: new FormControl('')    
  });
  taskStatus = Object.values(TaskStatusENUM);
  ngOnInit(): void {
    this.editTaskFormGroup.patchValue({
      task: this.taskItem.task,
      taskId: this.taskItem.id
    })
  }
  onSubmit(){
    console.log(this.editTaskFormGroup.value);
  }
}
