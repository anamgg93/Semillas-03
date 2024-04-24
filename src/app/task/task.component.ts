import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ConfirmationService } from 'primeng/api';
import { Tasks } from './task.interface';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  botonEditarDesactivado = false;

  constructor(public taskService: TaskService,
    private confirmationService: ConfirmationService) { }

  public btnEdit = [
    { url: '/edit' },

  ];

  editTask(task: Tasks) {
    this.taskService.editTask(task);
  }

  confirmDelete(task: Tasks) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta tarea?',
      accept: () => {
        this.taskService.deleteTask(task);
      }
    });

  }
}
