import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../Shared/map/map.component';
import { FormControl, FormGroup } from '@angular/forms';

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

  signupForm = new FormGroup({
    registration_number: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    course: new FormControl(''),
    branch: new FormControl(''),
    year: new FormControl(''),
    semester: new FormControl(''),
    address: new FormControl(''),
    batch: new FormControl('')
  })

  constructor(
    private api : ApiServiceService,
    public dialog: MatDialog
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
  console.log('SIGN UP FORM', this.signupForm.value);
}

populateBatch(duration: number): void {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 20; year <= currentYear; year++) {
    const batch_range = (year + duration) % 100;
    const batch = year + '-' + batch_range;
    this.batch.push(batch);
  }
}

}
