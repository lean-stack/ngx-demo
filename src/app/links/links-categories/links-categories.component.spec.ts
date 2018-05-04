import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCategoriesComponent } from './links-categories.component';

describe('LinksCategoriesComponent', () => {
  let component: LinksCategoriesComponent;
  let fixture: ComponentFixture<LinksCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
