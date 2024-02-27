import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../Shared/map/map.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  
})
export class SingupComponent implements OnInit {

  hide: boolean = true;
  hide2: boolean = true;
  course : any[] = [];
  branch : string[] = [];
  semester : number[] = [];
  year : number[] = [];
  batch : string[] = [];
  selectedYear!: string;
  confirmPassword!: string;
  submitted: boolean = false;

  signupForm = new FormGroup({
    registrationNumber: new FormControl('',Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
    course: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    semester: new FormControl(''),
    address: new FormControl('',Validators.required),
    batch: new FormControl('',Validators.required)
  })

  constructor(
    private api : ApiServiceService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() : void {
    this.api.get('allcourse').subscribe({
      next: (res:any) => {
        this.course = res.response;
      }
    })
  }

  courseSelect(index: number): void {
    const { branch, duration } = this.course[index];
    this.branch = branch;
    this.year = Array.from({ length: duration }, (_, index) => index + 1);
    this.populateBatch(duration);
}

openDialog() {
  const dialogRef = this.dialog.open(MapComponent, {
    disableClose: true
  })

  dialogRef.afterClosed().subscribe((res:any) => {
    this.signupForm.patchValue({
      address : res
    })
  })
}

selectYear(year: number) {
  const semester = year + year - 1;
  this.semester = [];
  this.semester.push(semester);
  this.semester.push(semester + 1);
}

submit() {
  this.submitted = true;
  if (this.signupForm.invalid) {
    return;
  }

  const data = this.signupForm.value;
  this.api.post('signup',data).subscribe({
    next: (res: any) => {
      const { email } = res.response;
      this.router.navigateByUrl('/otp', {state: { email }})
    }
  })
}

populateBatch(duration: number): void {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 20; year <= currentYear; year++) {
    const batch_range = (year + duration) % 100;
    const batch = year + '-' + batch_range;
    this.batch.push(batch);
  }
}

get formControl() {
  return this.signupForm.controls;
}

}
