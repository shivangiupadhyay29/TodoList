// imports the core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReminderModule } from './reminder/reminder.module';

//imports components
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations:[AppComponent, TodoComponent, TasklistComponent],
  imports:[BrowserModule,ReminderModule],
  providers:[],
  bootstrap:[AppComponent],
})

export class AppModule{}
