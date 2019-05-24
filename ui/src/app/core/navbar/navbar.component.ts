import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {ApiService} from '../services/api.service';
import {UtilsService} from '../services/utils.service';
import {NgForm} from '@angular/forms';
import {query} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchForm') searchForm: NgForm;

  constructor(private apiService: ApiService,
              private utilsService: UtilsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // CHECK SESSION STORAGE PARAM VALIDATION
    const subRedditParam = sessionStorage.getItem('subReddit');
    if (subRedditParam && (subRedditParam != null || subRedditParam !== 'undefined')) {
          this.searchResults(sessionStorage.getItem('subReddit'));
    }
    else {
      sessionStorage.removeItem('subReddit');
      this.router.navigate(['posts'])
    }
  }

  private prepareQuery(query) {
    // CHECK QUERY VALIDATION AND PREPARE IT.
    query = isNaN(query) ? query.replace(/\s/g, '') : false;
    return query;
  }

  searchResults(query) {
    const subReddit = query;
    query = this.prepareQuery(query);
    if (query && query !== 'undefined') {
      // CALL FIRST 5 POSTS;
      this.apiService.getPosts(query, 5)
        .subscribe(
          response => {
            sessionStorage.setItem('subReddit', subReddit);
            const posts = response['data'].children.map(post => post.data);
            this.utilsService.setPosts(posts);
            this.utilsService.posts.next(posts);
            this.utilsService.hasPosts.next(true);
            this.searchForm.reset();
          },
          err => {
            let message: string;
            console.log(err);
            switch (err.status) {
              case 403:
                message = 'can not get results for this query';
                break;
              case 404:
                message = 'can not find any results';
                break;
              default:
                message = 'There was some problem...try search General Subjects';
            }
            this.utilsService.hasPosts.next(false);
            sessionStorage.setItem('subReddit', undefined);
            this.utilsService.notification(message, null, 'failed');
            this.router.navigate(['../../'], {relativeTo: this.route});
          }
        );
    } else {
      this.utilsService.hasPosts.next(false);
      sessionStorage.removeItem('subReddit');
      this.utilsService.notification('Not Valid Query', null, 'failed');
      this.router.navigate(['./']);
    }
    this.router.navigate(['posts', subReddit], {relativeTo: this.route})
  }
}
