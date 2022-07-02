import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT have "button was clicked!" text if button was never clicked', () => {
    const p = fixture.debugElement.query(
      dl => dl.name === 'p' && dl.nativeElement.textContent === 'button was clicked!'
    );
    expect(p).toBeFalsy();
  });

  it('should have "button was clicked!" text when button was clicked', () => {
    const button = fixture.debugElement.query(
      dl => dl.name === 'input' && dl.nativeElement.value === 'Click me!'
    );

    expect(button).toBeTruthy();
    button.nativeElement.click();
    fixture.detectChanges();

    const p = fixture.debugElement.query(
      dl => dl.name === 'p' && dl.nativeElement.textContent === 'button was clicked!'
    );

    expect(p).toBeTruthy();
  });
});
