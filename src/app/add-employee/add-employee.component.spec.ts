import { AddEmployeeComponent } from './add-employee.component';
import { byText, createComponentFactory, Spectator} from '@ngneat/spectator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let spectator: Spectator<AddEmployeeComponent>;
  let componentDom;

  const createComponent = createComponentFactory({
    component: AddEmployeeComponent,
    imports: [ MatFormFieldModule, MatInputModule ]
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
    expect(spectator.query('#firstName')).toBeInstanceOf(HTMLInputElement);
    const firstNameInput = spectator.query('#firstName') as HTMLInputElement;
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(firstNameInput).toHaveAttribute('matInput');
    const firstNameLabel = spectator.query(byText('First Name'));
    expect(firstNameLabel).toExist();
  });
});
