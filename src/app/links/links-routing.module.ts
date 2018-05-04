import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksShellComponent } from './links-shell/links-shell.component';
import { LinksListComponent } from './links-list/links-list.component';

const routes: Routes = [
  { path: 'links', component: LinksShellComponent,
    children: [
      { path: ':category', component: LinksListComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
