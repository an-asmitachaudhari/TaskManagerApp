import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData: any;
  constructor(
    private formBuilder: FormBuilder,
    private _taskService: TasksService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginUserData = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this._taskService
      .userLogin(this.loginUserData.value)
      .subscribe((resp: any) => {
        if (resp['code'] === 200) {
          resp.message;
          alert('Log in succefull');
          localStorage.setItem('token', resp.token);
          this._router.navigate(['/home']);
        } else {
          resp.message;
        }
      });
  }
}
