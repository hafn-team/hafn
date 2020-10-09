import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideProjectComponent } from './inside-project.component';

describe('InsideProjectComponent', () => {
  let component: InsideProjectComponent;
  let fixture: ComponentFixture<InsideProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
