import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatMenuModule, MatSnackBarModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
