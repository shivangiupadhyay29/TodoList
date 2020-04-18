import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReminderComponent implements OnInit {
  @Input() date:string='';
  // date:string=new Date();
  constructor() { }

  ngOnInit(): void {
    console.log(this.date);
  }

}
