import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ITask} from "../../ITask";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  @Output() onDeleteClick:EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<ITask> = new EventEmitter();
  faTimes:any=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:ITask){
    this.onDeleteClick.emit(task)
  }

  onToggle(task:ITask){
    this.onToggleReminder.emit(task);
  }

}
