import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [ReminderComponent],
  imports: [
    CommonModule
  ],
  exports: [ReminderComponent]
})
export class ReminderModule { }
