import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() disabled: boolean = true;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngDoCheck() {}

  ngOnInit(): void {}
}
