// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COSTUME MODULES
import {PostsWrapperRoutingModule} from './posts-wrapper-routing.module';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";

// COMPONENTS
import {PostsWrapperComponent} from './posts-wrapper.component';

@NgModule({
  declarations: [
    PostsWrapperComponent
  ],
  imports: [
    CommonModule,
    PostsWrapperRoutingModule,
    SharedModule
  ]
})
export class PostsWrapperModule { }
