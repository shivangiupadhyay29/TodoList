import Note from './task.interface';

export default class Task implements Note{
  showDetails:boolean;
  createdOn:string;
  isReminderSet:boolean;
  constructor(public content,public status){
    this.showDetails = false;
    this.createdOn = new Date().toLocaleString();
    this.isReminderSet = false;
  }

  toggleDetailsVisibility():void{
    this.showDetails = !this.showDetails;
  }
}
