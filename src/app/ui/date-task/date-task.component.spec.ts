import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTaskComponent } from './date-task.component';

describe('DateTaskComponent', () => {
  let component: DateTaskComponent;
  let fixture: ComponentFixture<DateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
