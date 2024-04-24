import { Injectable } from '@angular/core';
import { Tasks } from './task/task.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: Tasks[] = [];
  public lastId: number = 0;


  public taskForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    detalle: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private router: Router) {


    this.loadLocalStorage();
  }


  displayAddTaskBtn = false;


  private saveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const tasksString = localStorage.getItem('tasks');
      if (tasksString) {
        this.tasks = JSON.parse(tasksString);
      }
    }
  }


  addTaskBtn() {
    this.displayAddTaskBtn = true;
  }

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Tasks = {
        id: this.generateId(),
        titulo: this.taskForm.value.titulo,
        detalle: this.taskForm.value.detalle,
        completado: false,
      };

      this.tasks.push(newTask);
      this.taskForm.reset();
      this.saveLocalStorage();
    }
  }

  generateId(): string {
    const lastId = parseInt(localStorage.getItem('lastId') || '0', 10);
    const newId = lastId + 1;
    localStorage.setItem('lastId', newId.toString());
    return newId.toString();
  }

  deleteTask(task: Tasks) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveLocalStorage();
    }
  }

  editTask(task: Tasks) {
    this.router.navigate(['/edit', task.id]);
    this.saveLocalStorage();
  }

  getTaskById(taskId: string): Tasks | undefined {
    return this.tasks.find(task => task.id === taskId);
  }


  updateTask(task: Tasks) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveLocalStorage();
    }
  }



}
