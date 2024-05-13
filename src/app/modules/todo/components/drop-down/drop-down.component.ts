import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Output() value: EventEmitter<string> = new EventEmitter<string>();

  dropDownSelectonEnabled: boolean = false;
  selectedItem: string = 'Select';

  constructor() {}

  ngOnInit(): void {}

  selectItem(item: string) {
    this.selectedItem = item;
    this.value.emit(item);
  }
}
