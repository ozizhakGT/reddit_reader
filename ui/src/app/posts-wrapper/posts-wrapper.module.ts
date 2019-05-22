// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COSTUME MODULES
import {PostsWrapperRoutingModule} from './posts-wrapper-routing.module';
import {SharedModule} from '../shared/shared.module';

// COMPONENTS
import {PostsWrapperComponent} from './posts-wrapper.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    PostsWrapperComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostsWrapperRoutingModule,
    SharedModule
  ]
})
export class PostsWrapperModule { }
