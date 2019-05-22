import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../core/services/utils.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-posts-wrapper',
  templateUrl: './posts-wrapper.component.html',
  styleUrls: ['./posts-wrapper.component.css']
})
export class PostsWrapperComponent implements OnInit {
  hasPosts = false;
  constructor(private utilsService: UtilsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.utilsService.hasPosts.subscribe(hasPost => {
      this.hasPosts = hasPost;
    });
  }
}
