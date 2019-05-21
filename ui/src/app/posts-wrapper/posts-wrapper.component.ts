import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../core/services/utils.service";

@Component({
  selector: 'app-posts-wrapper',
  templateUrl: './posts-wrapper.component.html',
  styleUrls: ['./posts-wrapper.component.css']
})
export class PostsWrapperComponent implements OnInit {
  posts: any[] = [];
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.posts
      .subscribe(
        posts => {
          this.posts = posts;
          console.log(this.posts)
        });
  }
}
