import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {ITask} from "../../ITask";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:ITask[] = [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    //This is similar to promise
    this.taskService.getTasks().subscribe(tasks =>
      this.tasks=tasks
    );
  }

}
