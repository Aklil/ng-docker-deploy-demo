import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: [''],
      confirmPassword: ['']
    },
     {validators: this.passwordsAreSame()});
  }

  private passwordsAreSame(): ValidatorFn{

    return (control: AbstractControl): ValidationErrors | null => {

      const fg = control as FormGroup;
      const password = fg.get('password').value;
      const confirmPassword = fg.get('confirmPassword').value;

      if (password === confirmPassword){
        return null;
      }else{
        return {passwordsDoNotMatch: true};
      }
    };
  }

}
