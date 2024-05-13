import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SmallButtonComponent } from './small-button.component';

describe('SmallButtonComponent', () => {
  let component: SmallButtonComponent;
  let fixture: ComponentFixture<SmallButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SmallButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render edit icon when buttonType is "edit"', () => {
    component.buttonType = 'edit';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.bx-edit-alt'));
    expect(iconElement).toBeTruthy();
  });

  it('should render delete icon when buttonType is "delete"', () => {
    component.buttonType = 'delete';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.bx-trash'));
    expect(iconElement).toBeTruthy();
  });

  it('should render confirm icon when buttonType is "confirm"', () => {
    component.buttonType = 'confirm';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.bx-check'));
    expect(iconElement).toBeTruthy();
  });

  it('should not render any icon when buttonType is not provided', () => {
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement).toBeFalsy();
  });
});
