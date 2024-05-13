import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.css'],
})
export class SmallButtonComponent implements OnInit {
  @Input() buttonType?: 'edit' | 'delete' | 'confirm';

  constructor() {}

  ngOnInit(): void {}
}
