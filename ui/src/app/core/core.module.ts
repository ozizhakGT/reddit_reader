// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// COSTUME MODULES
import {SharedModule} from '../shared/shared.module';

// COMPONENTS
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
