import { Component, EventEmitter, Output } from '@angular/core';

import { FormControl ,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {

  @Output() credentials =new EventEmitter<{email?:string | null | undefined,password?:string | null | undefined}>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  onSubmit(){
    console.log(this.loginForm.value);
   
    let credentials =  {...this.loginForm.value};
    this.credentials.emit(credentials);
   
  }

}
