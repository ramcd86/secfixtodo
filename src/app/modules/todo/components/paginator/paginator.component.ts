import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages: number = 0;
  @Input() currentPage: number = 0;
  @Input() totalItems: number = 0;
  @Input() currentPageLength: number = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectPage(page: number) {
    this.changePage.emit(page);
  }

  pageLeft() {
    if (this.numberOfPages === 1 || this.currentPage === 0) return;
    this.changePage.emit(this.currentPage - 1);
  }

  pageRight() {
    if (this.numberOfPages === 1 || this.currentPage === this.numberOfPages - 1)
      return;
    this.changePage.emit(this.currentPage + 1);
  }
}
