import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  MinLengthValidator,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TasksService } from 'src/app/services/tasks-service.service';
import {
  emailExistsValidator,
  ValidateEmail,
  ValidatePassword,
} from 'src/app/validators/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  file: any = File;
  isValidFormSubmitted = false;
  //emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  RegisterUserData = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', {
      validators: [
        Validators.required,
        /*Validators.pattern(this.emailPattern)*/ ValidateEmail,
      ],
      asyncValidators: [emailExistsValidator(this._tasksService)],
      /* updateOn: 'blur',*/
    }),

    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, ValidatePassword]),
    confirmpassword: new FormControl('', [Validators.required]),
  });
  matchPass: boolean = false;
  url: any = environment.url;
  studentEmailcheck: any;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _tasksService: TasksService,
    private httpClient: HttpClient
  ) {}

  get email() {
    return this.RegisterUserData.controls['email'];
  }

  /*get password()
    {
      return this.RegisterUserData.controls['password'];
    }
*/

  /*onFormSubmit(RegisterForm:any)
  {
    this.isValidFormSubmitted=false;
    if(this.RegisterForm.invalid)
    {
      return;
    }
    this.isValidFormSubmitted=true;
    this.RegisterForm.reset();
  }*/
  ngOnInit() {}

  passwordsMatch = (password: any, confirmpassword: any) => {
    if (password === confirmpassword) {
      this.matchPass = true;
    } else {
      this.matchPass = false;
    }
  };
  /*onSubmit() {
    this._taskService.postRegisterData(this.RegisterUserData.value).subscribe(
      (res) =>
      {
        console.log('Saved successfully');

      },
      (err) =>
      {
        console.log(err);
      },
    );
  }

/*getdata()
{
  this._taskService.getRegisterData(this.RegisterUserData.value).subscribe(
    (res) =>
    {
      console.log(res);
      this.register = res as Register[];
    },
    (err) =>
    {
      console.log(err);
    }
  )
}*/

  /*get f() {
    return this.RegisterUserData.controls;
  }*/

  onSubmit() {
    this._tasksService
      .RegisterUser(this.RegisterUserData.value)
      .subscribe((resp: any) => {
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

    console.log(this.RegisterUserData.value);
  }

  /*upload(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }


  submitPhoto() {
    const uploadData = new FormData();
    uploadData.append('profileimage', this.file, this.file.name);

    this.httpClient.post(`${this.url}/fileuploading`, uploadData).subscribe(resp => {
      console.log('file uploadd', resp);
    });

  }*/

  upload(event: any) {
    const file = event.target.files[0];
    console.log(file);

    const formdata = new FormData();
    formdata.append('file', file);

    this.httpClient
      .post('http://localhost:8000/fileuploading', formdata)
      .subscribe(
        (resp: any) => {
          console.log();
        },
        (err: any) => {
          console.error(err);
        }
      );
  }

  emailAlredyExist = '';
  emailCheckUnique(email: any) {
    const body = {
      email: email,
    };
    this._tasksService.emailCheckUnique(body).subscribe((resp: any) => {
      console.log(resp);
      this.studentEmailcheck = resp;
      if (this.studentEmailcheck.length > 0) {
        this.emailAlredyExist = 'Email Alredy Exist';
      } else {
        this.emailAlredyExist = '';
      }
    });
  }
}
//function minLength(arg0: number): import("@angular/forms").ValidatorFn {
// throw new Error('Function not implemented.');
//}
