import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksShellComponent } from './links-shell/links-shell.component';
import { LinksRoutingModule } from './links-routing.module';
import { LinksCategoriesComponent } from './links-categories/links-categories.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule
  ],
  declarations: [LinksShellComponent, LinksCategoriesComponent, LinksListComponent]
})
export class LinksModule { }
