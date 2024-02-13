import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GenericCardComponent } from '../generic-card/generic-card.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CardHeaderDirective } from '../../shared/directive/app-card-header';
import { CardFooterDirective } from '../../shared/directive/app-card-footer';
import { CardContentDirective } from '../../shared/directive/app-card-content';
import { CardComponent, CardContentDirective1, CardFooterDirective1, CardHeaderDirective1 } from '../cardhelper/cardhelper.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DateTaskComponent } from '../date-task/date-task.component';
import { DateService } from '../../shared/service/date.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, 
    DateTaskComponent, MatIconModule, CommonModule,   CardComponent,
    CardFooterDirective1,
    CardHeaderDirective1,
    CardContentDirective1,  TasksComponent, GenericCardComponent, CardFooterDirective, CardContentDirective, CardHeaderDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent{  
  dateService = inject(DateService); 
  comingFromChild(data:Date){
    this.dateService.setNewDate(data);
    console.log('This is the date coming from child', data);
  }
}
