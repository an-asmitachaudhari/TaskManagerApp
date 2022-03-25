import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss'],
})
export class TodaysComponent implements OnInit {
  modalRef: any;
  constructor() {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {}
}
