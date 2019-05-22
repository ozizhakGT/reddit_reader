// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// COSTUME MODULES
import {SharedModule} from '../shared/shared.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';

// COMPONENTS
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
