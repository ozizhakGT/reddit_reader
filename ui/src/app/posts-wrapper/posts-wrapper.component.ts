import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../core/services/utils.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts-wrapper',
  templateUrl: './posts-wrapper.component.html',
  styleUrls: ['./posts-wrapper.component.css']
})
export class PostsWrapperComponent implements OnInit {
  hasPosts = false;
  subReddit = sessionStorage.getItem('subReddit');
  constructor(private utilsService: UtilsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.utilsService.hasPosts.subscribe(hasPost => {
      let subReddit = sessionStorage.getItem('subReddit');
      this.hasPosts = hasPost;
    });
  }
}
