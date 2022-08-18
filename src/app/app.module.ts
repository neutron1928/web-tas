import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compents/header/header.component';
import { ButtonComponent } from './compents/button/button.component';
import { TasksComponent } from './compents/tasks/tasks.component';
import { TaskItemComponent } from './compents/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './compents/add-task/add-task.component';
import { RouterModule ,Routes} from '@angular/router';
import { AboutComponent } from './compents/about/about.component';
import { FooterComponent } from './compents/footer/footer.component';

const appRoutes: Routes= [
  {path : '' , component : TasksComponent },
  {path : 'about' ,component : AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes , {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
