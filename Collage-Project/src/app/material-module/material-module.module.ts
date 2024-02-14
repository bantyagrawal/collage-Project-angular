import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';


const MaterialModules: any[] = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialModuleModule { }
