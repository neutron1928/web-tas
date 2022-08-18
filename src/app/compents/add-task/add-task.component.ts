import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
// remember to solve this problem if is not solve when you link fields with us
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()
  text : string | undefined; // I put undefined to this to solve this problem but if it make any error you can search it
  day : string | any;
  reminder: boolean =false;
  showAddTask: boolean |any;
  subscription : Subscription
  constructor(private uiService:UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=>(this.showAddTask= value ))
   }

  ngOnInit(): void {
  }
  onSubmit(){
    // quick vaildtion
    if(!this.text) {
      alert('Please Add a Task ! ');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day ,
      reminder : this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.text= ' ';
    this.day = ' ';
    this.reminder = false ;
  }

}
