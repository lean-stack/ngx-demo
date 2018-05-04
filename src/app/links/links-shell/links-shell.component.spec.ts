import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksShellComponent } from './links-shell.component';

describe('LinksShellComponent', () => {
  let component: LinksShellComponent;
  let fixture: ComponentFixture<LinksShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
