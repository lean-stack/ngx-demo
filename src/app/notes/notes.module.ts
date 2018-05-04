import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesShellComponent } from './notes-shell/notes-shell.component';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule
  ],
  declarations: [NotesShellComponent]
})
export class NotesModule { }
