import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label correctly', () => {
    const label = 'Submit';
    component.label = label;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('.add-todo')
    ).nativeElement;
    expect(buttonElement.textContent.trim()).toEqual(label);
  });

  it('should add "deselected" class when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('.add-todo')
    ).nativeElement;
    expect(buttonElement.classList.contains('deselected')).toBeTrue();
  });

  it('should add "selected" class when disabled is false', () => {
    component.disabled = false;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('.add-todo')
    ).nativeElement;
    expect(buttonElement.classList.contains('selected')).toBeTrue();
  });

  it('should emit onClick event when clicked', () => {
    spyOn(component.onClick, 'emit');
    const buttonElement = fixture.debugElement.query(
      By.css('.add-todo')
    ).nativeElement;
    buttonElement.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
