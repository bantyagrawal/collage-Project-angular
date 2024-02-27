import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../Shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FooterComponent } from '../Shared/footer/footer.component';
import { BookComponent } from './book/book.component';




@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MaterialModuleModule,
  ]
})
export class LayoutModule { }
