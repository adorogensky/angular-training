import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('EmployeeListComponent is created', () => {
    expect(component).toBeTruthy();
  });

  it('EmployeeListComponent has a paragraph', () => {
    const componentDom: HTMLElement = fixture.nativeElement;
    expect(componentDom.querySelector('p').textContent).toContain('employee-list works!');
  });
});
