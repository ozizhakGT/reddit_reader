import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatListModule, MatMenuModule, MatSnackBarModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ]
})
export class SharedModule { }
