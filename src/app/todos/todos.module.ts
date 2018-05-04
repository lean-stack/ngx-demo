import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './todos-shell/todos-shell.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: 'todos', children: [
      { path: '', component: TodosShellComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodosShellComponent],
  exports: [RouterModule]
})
export class TodosModule { }
