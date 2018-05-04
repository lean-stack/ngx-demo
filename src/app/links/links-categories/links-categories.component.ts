import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-categories',
  templateUrl: './links-categories.component.html',
  styleUrls: ['./links-categories.component.css']
})
export class LinksCategoriesComponent implements OnInit {

  public categories: string[];

  constructor() { }

  ngOnInit() {
    this.categories = [ 'JavaScript', 'HTML', 'CSS', 'Angular'];
  }

}
