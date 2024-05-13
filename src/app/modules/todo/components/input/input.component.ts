import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label?: string;
  @Output() value: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleInput(arg: Event) {
    this.value.emit((arg.target as HTMLInputElement).value);
  }
}
