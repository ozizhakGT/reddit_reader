import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsWrapperComponent} from './posts-wrapper.component';
import {PostsComponent} from './posts/posts.component';


const postsRoutes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', children: [
      {path: '', component: PostsWrapperComponent},
      {path: ':subReddit', component: PostsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsWrapperRoutingModule {}
