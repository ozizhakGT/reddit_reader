import {RouterModule, Routes} from "@angular/router";
import {PostsWrapperComponent} from "./posts-wrapper.component";
import {NgModule} from "@angular/core";


const postsRoutes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsWrapperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsWrapperRoutingModule {}
