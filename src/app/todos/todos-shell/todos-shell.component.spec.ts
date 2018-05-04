import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosShellComponent } from './todos-shell.component';

describe('TodosShellComponent', () => {
  let component: TodosShellComponent;
  let fixture: ComponentFixture<TodosShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
