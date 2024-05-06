import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface'; 
@Component({
 selector: 'app-tasks-list',
 templateUrl: './tasks-list.component.html'
 })
 export class TasksListComponent {
    @Input() tasks: string[] = [];
  
}