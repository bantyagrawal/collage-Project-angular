import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email: any = '';
  password: any = '';
  submitted: boolean = false;

  constructor(
    private api : ApiServiceService,
    private toster : ToastrService
    ) {}

  submit(): void {
    this.submitted = true;    
    if ( !this.email || !this.password) {
      return;
    }

    const data: any = {
      'email': this.email,
      'password': this.password
    }
    this.api.post('login', data).subscribe({
      next: (res: any) => {
        // this.toster.success(res.message);
        alert(res.message);
        console.log("RESPONSE",res);
        
      },
      error: (err: any) => {
        console.log('ERROR',err.error);
        
      }
    })

  }

}
