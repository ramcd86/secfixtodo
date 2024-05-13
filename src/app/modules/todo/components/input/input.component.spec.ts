import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label correctly', () => {
    const label = 'Input Label';
    component.label = label;
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(
      By.css('.label-style')
    ).nativeElement;
    expect(labelElement.textContent.trim()).toEqual(label);
  });

  it('should render the placeholder correctly', () => {
    const placeholder = 'Placeholder Text';
    component.placeholder = placeholder;
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('.input-style')
    ).nativeElement;
    expect(inputElement.getAttribute('placeholder')).toEqual(placeholder);
  });

  it('should emit value on input', () => {
    spyOn(component.value, 'emit');
    const inputElement = fixture.debugElement.query(
      By.css('.input-style')
    ).nativeElement;
    const value = 'Input Value';
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    expect(component.value.emit).toHaveBeenCalledWith(value);
  });
});
