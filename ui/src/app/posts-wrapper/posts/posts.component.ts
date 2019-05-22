import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilsService} from '../../core/services/utils.service';
import {ApiService} from '../../core/services/api.service';
import {Post} from '../../core/interfaces/post.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  posts: Post[] = [];
  subReddit: string = sessionStorage.getItem('subReddit');
  previews = 0;
  next = 5;
  loader = false;

  constructor(private utilsService: UtilsService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.postSubscription = this.utilsService.posts.subscribe((posts: Post[]) => {
      // RESET PAGINATION OPTIONS ONLY WHEN GETTING NEW QUERY!
      if (posts.length < 10) {
        this.previews = 0;
        this.next = 5;
      }
      // TAKE SUB REDDIT FROM SESSION STORAGE
      this.subReddit = sessionStorage.getItem('subReddit');
      this.posts = posts;
      this.utilsService.setPosts(this.posts);
    });
  }

  ngOnDestroy() {
    // SUBSCRIBE LEAK PREVENTION
    this.postSubscription.unsubscribe();
  }

  async getNextPosts() {
    // REQUEST THE POSTS ARRAY + 5 INDEXES MORE
    if (this.posts.length === this.next) {
      this.loader = true;
      this.apiService.getPosts(this.subReddit, this.posts.length + 5).toPromise()
        .then(
          posts => {
            this.posts = posts['data'].children.map(post => post.data);
            this.previews += 5;
            this.next += 5;
            this.utilsService.setPosts(this.posts);
            this.loader = false;
          });
    //  RARE SITUATION THAT HAVE NEXT VARIABLE GREATER THEN POST ARRAY
    } else if (this.next > this.posts.length) {
      this.utilsService.notification('No more Results!', null, 'success');
    } else {
      this.previews += 5;
      this.next += 5;
    }
  }

  // GO 5 INDEXES BACK IN POST ARRAY
  onPreviewsBtn() {
    this.previews -= 5;
    this.next -= 5;
  }

}
