import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TasksService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  loadedFeature = 'project';
  Form = this._fb.group({
    setdate: [''],
    addreminder: [''],
    markasurgent: [''],
    addnote: [''],
  });
  modalRef!: BsModalRef;
  editMode: boolean = false;

  constructor(
    public _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router,
    private modalService: BsModalService,
    private _taskService: TasksService
  ) {}

  ngOnInit(): void {}

  onNavigate(feature: any) {
    this.loadedFeature = feature;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this._taskService.addTask(this.Form.value).subscribe((resp: any) => {
      if (resp['code'] === 200) {
        resp.message;
      } else {
        resp.message;
      }
    });

    /*this.submitted = true;

    // Returns false if form is invalid
    if (this.RegisterUserData.invalid) {
      return;
    }

    console.log("Form Values" + JSON.stringify(this.RegisterUserData.value));
  }*/

    console.log(this.Form.value);
  }

  /*upload(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}*/
}
