import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatOrganizationComponent } from './creat-organization.component';

describe('CreatOrganizationComponent', () => {
  let component: CreatOrganizationComponent;
  let fixture: ComponentFixture<CreatOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
