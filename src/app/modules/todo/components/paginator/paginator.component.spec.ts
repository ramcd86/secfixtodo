import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator.component';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'range' })
class MockRangePipe implements PipeTransform {
  transform(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index);
  }
}

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent, MockRangePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page number when page is selected', () => {
    spyOn(component.changePage, 'emit');
    const pageNumber = 3;
    component.selectPage(pageNumber);
    expect(component.changePage.emit).toHaveBeenCalledWith(pageNumber);
  });

  it('should emit previous page number when left arrow is clicked', () => {
    spyOn(component.changePage, 'emit');
    component.currentPage = 3;
    component.pageLeft();
    expect(component.changePage.emit).toHaveBeenCalledWith(2);
  });

  it('should not emit page number when left arrow is clicked and currentPage is 0', () => {
    spyOn(component.changePage, 'emit');
    component.currentPage = 0;
    component.pageLeft();
    expect(component.changePage.emit).not.toHaveBeenCalled();
  });

  it('should emit next page number when right arrow is clicked', () => {
    spyOn(component.changePage, 'emit');
    component.numberOfPages = 5;
    component.currentPage = 2;
    component.pageRight();
    expect(component.changePage.emit).toHaveBeenCalledWith(3);
  });

  it('should not emit page number when right arrow is clicked and currentPage is last page', () => {
    spyOn(component.changePage, 'emit');
    component.numberOfPages = 5;
    component.currentPage = 4;
    component.pageRight();
    expect(component.changePage.emit).not.toHaveBeenCalled();
  });
});
