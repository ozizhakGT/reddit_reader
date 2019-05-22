import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule,
  MatExpansionModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
