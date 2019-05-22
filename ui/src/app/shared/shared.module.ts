import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule,
  MatExpansionModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    NgxChartsModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
