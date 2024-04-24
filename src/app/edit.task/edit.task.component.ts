import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Tasks } from '../task/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit.task.component.html',
  styleUrls: ['./edit.task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Tasks = {
    id: '',
    titulo: '',
    detalle: '',
    completado: false
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId !== null) {
      const localTask = this.taskService.tasks.find(task => task.id === taskId);
      if (localTask) {
        this.task = localTask;
      } else {
        this.task = this.taskService.getTaskById(taskId) || this.task;
      }
      this.taskService.taskForm.patchValue({
        titulo: this.task.titulo,
        detalle: this.task.detalle
      });
    }
  }

  saveTask() {
    if (this.taskService.taskForm.valid) {
      const updatedTask: Tasks = {
        id: this.task.id,
        titulo: this.taskService.taskForm.value.titulo,
        detalle: this.taskService.taskForm.value.detalle,
        completado: this.task.completado
      };
      this.taskService.updateTask(updatedTask);
      this.router.navigate(['/tasks']);
    }
  }






}



