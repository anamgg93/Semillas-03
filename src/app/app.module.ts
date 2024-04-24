import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { EditTaskComponent } from './edit.task/edit.task.component';
import { AppRouterModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRouterModule,
    ConfirmDialogModule,
  ],
  providers: [
    provideClientHydration(),
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
