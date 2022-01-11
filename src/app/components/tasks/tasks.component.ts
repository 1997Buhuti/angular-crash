import { Component, OnInit } from '@angular/core';
import {ITask} from "../../ITask";
import {Sample_Tasks} from "../../Sample_Tasks";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:ITask[] = Sample_Tasks;
  constructor() { }

  ngOnInit(): void {
  }

}
