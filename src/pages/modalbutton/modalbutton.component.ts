import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modalbutton',
  templateUrl: './modalbutton.component.html',
  styleUrls: ['./modalbutton.component.scss'],
})
export class ModalbuttonComponent implements OnInit {
  MarvellousForm = this._fb.group({
    setdate: [''],
    addreminder: [''],
    markasurgent: [''],
    addnote: [''],
  });
  modalRef!: BsModalRef;
  editMode: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
