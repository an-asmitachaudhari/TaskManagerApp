import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { map } from 'rxjs';
import { TasksService } from '../services/tasks-service.service';

//Validator for email
export function ValidateEmail(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const regx = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'); //At least 8 characters long;One lowercase, one uppercase one number and one special character; No whitespaces
  const validData = regx.test(control.value);
  return validData
    ? null
    : {
        invalidEmail: true,
      };
}

//validator for password
export function ValidatePassword(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const regx = new RegExp(
    '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$'
  ); //At least 8 characters long;One lowercase, one uppercase one number and one special character; No whitespaces
  const validData = regx.test(control.value);
  return validData
    ? null
    : {
        invalidPassword: true,
      };
}

export function emailExistsValidator(user: TasksService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return user
      .emailCheckUnique(control.value)
      .pipe(map((user) => (user ? { userExists: true } : null)));
  };
}
