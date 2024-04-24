import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit.task/edit.task.component';


const routes: Routes = [{

  path: 'tasks',
  component: TaskComponent

},
{
  path: 'edit/:id',
  component: EditTaskComponent

},
{
  path: '**',
  redirectTo: 'tasks'

}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule,

  ]
})

export class AppRouterModule { }
