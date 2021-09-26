import { AddEmployeeComponent } from './add-employee.component';
import { byText, createComponentFactory, Spectator} from '@ngneat/spectator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from "@angular/material/core";

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let spectator: Spectator<AddEmployeeComponent>;
  let componentDom;

  const createComponent = createComponentFactory({
    component: AddEmployeeComponent,
    imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule ]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.fixture.componentInstance;
    componentDom = spectator.fixture.nativeElement;
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a first name input', () => {
    const firstNameInput = spectator.query('#firstName');
    expect(firstNameInput).toBeInstanceOf(HTMLInputElement);
    const firstNameInputHtml = firstNameInput as HTMLInputElement;
    expect(firstNameInputHtml).toHaveAttribute('type', 'text');
    expect(firstNameInputHtml).toHaveAttribute('matInput');
    const firstNameLabel = spectator.query(byText('First Name'));
    expect(firstNameLabel).toExist();
  });

  it('should have a last name input', () => {
    const lastNameInput = spectator.query('#lastName');
    expect(lastNameInput).toBeInstanceOf(HTMLInputElement);
    const lastNameInputHtml = lastNameInput as HTMLInputElement;
    expect(lastNameInputHtml).toHaveAttribute('type', 'text');
    expect(lastNameInputHtml).toHaveAttribute('matInput');
    const lastNameLabel = spectator.query(byText('Last Name'));
    expect(lastNameLabel).toExist();
  });

  it('should have a department dropdown', () => {
    const deptSelect = spectator.query('#dept');
    expect(deptSelect).toBeInstanceOf(MatSelect);
  });
});
