import { Component, OnInit } from '@angular/core';
import Task from './task.class';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  textAreaVisible=false;
  taskList:Task[]=[];
  taskContent:string='';

  constructor() { }

  ngOnInit(): void {
  }

  toggleTextArea(){
    this.textAreaVisible =  !this.textAreaVisible;
  }

  addNewTask(value){
    this.textAreaVisible = false;
    if(value.length>0){
    this.taskList.unshift(new Task(value,'New'))
    // :'';  // put focus on input.
    }
  }


}
