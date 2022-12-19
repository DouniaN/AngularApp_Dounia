import { Component } from '@angular/core';

import { FormControl ,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private router:Router){}

  onSubmit(){
    console.log(this.loginForm.value);
    let credentials = {...this.loginForm.value};
    this.userService.login(credentials).subscribe({
      next: (data) => {
        console.log(data);
        this.userService.setLogin();
        this.router.navigateByUrl('/admin')
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }

}
