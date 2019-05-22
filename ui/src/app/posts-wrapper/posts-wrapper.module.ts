// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COSTUME MODULES
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {PostsWrapperRoutingModule} from './posts-wrapper-routing.module';
import {SharedModule} from '../shared/shared.module';

// COMPONENTS
import {PostsWrapperComponent} from './posts-wrapper.component';
import { PostsComponent } from './posts/posts.component';
import {CoreModule} from '../core/core.module';
import {ChartComponent} from './chart/chart.component';

@NgModule({
  declarations: [
    PostsWrapperComponent,
    PostsComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    PostsWrapperRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PostsWrapperModule { }
