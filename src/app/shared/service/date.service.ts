import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DateService{
    private dateSubject$ = new BehaviorSubject<Date>(new Date());
    public dateSelected$ = this.dateSubject$.asObservable();

    setNewDate(datePassed:Date){
        this.dateSubject$.next(datePassed);
    }
}