import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addimages',
  templateUrl: './addimages.component.html',
  styleUrls: ['./addimages.component.scss'],
})
export class AddimagesComponent implements OnInit {
  MarvellousForm = this._fb.group({
    setdate: [''],
    addreminder: [''],
    markasurgent: [''],
    addnote: [''],
  });
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
