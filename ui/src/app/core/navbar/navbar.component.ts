import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private apiService: ApiService, private utilsService: UtilsService) { }

  ngOnInit() {}
  private prepareQuery(query) {
    return query = isNaN(query) ? query.replace(/\s/g,'') : false;
  }
  searchResults(query) {
    if (this.prepareQuery(query)) {
      this.apiService.getPosts(query, 5)
        .subscribe(
          response => {
            let posts = response['data'].children.map(post => post['data']);
            this.utilsService.setPosts(posts);
          },
          err => {
            let message: string;
            console.log(err);
            switch (err['status']) {
              case 403:
                message = 'can not get results for this query';
                break;
              case 404:
                message = 'can not find any results';
                break;
              default:
                message = 'There was some problem...try search General Subjects';
            }
            this.utilsService.messageNotification(message, null, 'failed');
          }
        );
    } else {
      this.utilsService.messageNotification('Not Valid Query', null, 'failed');
      console.log('not valid');
    }
  }
}
