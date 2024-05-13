import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropDownComponent } from './drop-down.component';

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label correctly', () => {
    const label = 'Dropdown Label';
    component.label = label;
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(
      By.css('.label-style')
    ).nativeElement;
    expect(labelElement.textContent.trim()).toEqual(label);
  });

  it('should render the placeholder correctly', () => {
    const placeholder = 'Select';
    component.placeholder = placeholder;
    fixture.detectChanges();
    const selectedItemElement = fixture.debugElement.query(
      By.css('.input-style > span')
    ).nativeElement;
    expect(selectedItemElement.textContent.trim()).toEqual(placeholder);
  });

  it('should display dropdown items when clicked', () => {
    const dropdownElement = fixture.debugElement.query(
      By.css('.input-style.dropdown')
    ).nativeElement;
    dropdownElement.click();
    fixture.detectChanges();
    const dropdownSelectionElement = fixture.debugElement.query(
      By.css('.dropdown-selection')
    );
    expect(dropdownSelectionElement).toBeTruthy();
  });
});
