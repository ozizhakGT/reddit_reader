import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {ApiService} from '../services/api.service';
import {UtilsService} from '../services/utils.service';
import {NgForm} from "@angular/forms";

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.getItem('subReddit') && (sessionStorage.getItem('subReddit') !== null || sessionStorage.getItem('subReddit') !== undefined)) {
      this.searchResults(sessionStorage.getItem('subReddit'))
    }
  }
  private prepareQuery(query) {
    query = isNaN(query) ? query.replace(/\s/g, '') : false;
    return query;
  }
  searchResults(query) {
    const subRedit = query;
    query = this.prepareQuery(query);
    if (query) {
      this.apiService.getPosts(query, 5)
        .subscribe(
          response => {
            const posts = response['data'].children.map(post => post.data);
            sessionStorage.setItem('subReddit', subRedit);
            this.utilsService.setPosts(posts);
            this.utilsService.hasPosts.next(true);
            this.utilsService.posts.next(posts);
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
            this.router.navigate(['./']);
          }
        );
    } else {
      this.utilsService.hasPosts.next(false);
      sessionStorage.setItem('subReddit', undefined);
      this.utilsService.notification('Not Valid Query', null, 'failed');
      this.router.navigate(['./']);
      console.log('not valid');
    }
    this.router.navigate(['posts', subRedit], {relativeTo: this.route});
  }
}
