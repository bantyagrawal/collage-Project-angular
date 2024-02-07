import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  submitted: boolean = false;
  rememberMe: any = false;

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    checkbox: new FormControl(false),
  })
  constructor(
    private api : ApiServiceService,
    private router : Router,
    ) {}

  ngOnInit(): void {
    let details : any = {};
    const loginDetail = localStorage.getItem('studentLoginDetails');
    if (loginDetail) {
       details = JSON.parse(loginDetail);
    }
    this.loginForm.patchValue({
      email: details.email,
      password: details.password,
      checkbox: details.checkbox,
    })
  }

  get formControl () {
    return this.loginForm.controls;
  }

  submit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    if (this.loginForm.value.checkbox) {
      if (this.loginForm.value) {
        localStorage.setItem('studentLoginDetails',JSON.stringify(this.loginForm.value));
      }
    } else {
      localStorage.removeItem('studentLoginDetails');
    }

    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password 
    }

    this.api.post('login', data).subscribe({
      next: (res: any) => {
        localStorage.setItem('CollageToken',res.response);
        this.router.navigateByUrl('/home');
      },
      error: (err: any) => {
        console.log('ERROR',err.error);
        
      }
    })

  }

}
