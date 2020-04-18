import { Component, OnInit ,Input,ViewChild,ContentChild,AfterViewInit } from '@angular/core';
import Task from '../todo/task.class';
import {ReminderComponent} from '../reminder/reminder/reminder.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit,AfterViewInit {
  @Input() list:Task[];
  @ViewChild(ReminderComponent) reminder:ReminderComponent;
  // @ViewChild(ReminderComponent): QueryList<ReminderComponent>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{console.log('after view init',this.reminder);}
  trackList(index,item){
    return index;
  }

}
