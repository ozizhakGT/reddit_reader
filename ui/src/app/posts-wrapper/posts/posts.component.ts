import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../core/services/utils.service';
import {ApiService} from '../../core/services/api.service';
import {Post} from '../../core/interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  subReddit: string = sessionStorage.getItem('subReddit');
  previews        = 0;
  next            = 5;
  loader = false;

  constructor(private utilsService: UtilsService,
              private apiService: ApiService) {
  }

  ngOnInit() {

    this.utilsService.posts.subscribe((posts: Post[]) => {
      // RESET PAGINATION OPTIONS
      this.previews = 0;
      this.next     = 5;

      // TAKE SUB REDDIT FROM SESSION STORAGE
      this.subReddit = sessionStorage.getItem('subReddit');
      this.posts = posts;
    });
  }

  getPosts() {
    if (this.posts.length === this.next) {
      this.loader = true;
      this.apiService.getPosts(this.subReddit, this.posts.length + 5).toPromise()
        .then(
          posts => {
            this.posts = posts['data'].children.map(post => post.data);
            this.utilsService.setPosts(this.posts);
            this.previews += 5;
            this.next += 5;
            this.loader = false;
          });

    } else if (this.next > this.posts.length) {
      debugger;
      this.utilsService.notification('No more Results!', null, 'success');
    } else {
      this.previews += 5;
      this.next += 5;
    }
  }

  onPreviewsBtn() {
    this.previews -= 5;
    this.next -= 5;
  }

}
