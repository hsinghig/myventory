import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { DateService } from '../../shared/service/date.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-date-task',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './date-task.component.html',
  styleUrl: './date-task.component.scss'
})
export class DateTaskComponent {
  public currentDate:Date = new Date();
  @Output() dateSelected = new EventEmitter<Date>();

  previousDate(){
    this.incrementDate(-1);
  } 

  nextDate(){
   this.incrementDate(1);
  }

  private incrementDate(delta:number){
    this.currentDate = new Date(
      this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + delta);   
    this.dateSelected.emit(this.currentDate);
    }

}
