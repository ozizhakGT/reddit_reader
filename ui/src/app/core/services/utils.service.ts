import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject, Subject} from 'rxjs';
import {Post} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  subReddit = new BehaviorSubject<boolean>(false);
  posts = new Subject<Post[]>();
  hasPosts = new BehaviorSubject<boolean>(false);
  constructor(private Notification: MatSnackBar) { }

  notification(message, action, messagetype) {
    this.Notification.open(message, action, {
      duration: 3500,
      panelClass: ['notification', messagetype],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  /*
  * SET POST BY:
  * propArray INDEXES;
  * */
  setPosts(data) {
    let posts = [];
    const propArray: string[] = ['author', 'thumbnail', 'ups', 'created_utc', 'url', 'title'];
    data.forEach( (post, i) => {
      let holder = {};
      propArray.forEach(prop => {
        holder[prop] = post[prop];
      })
      posts[i] = holder;
    })
    this.formattingDate(posts);
    this.posts.next(posts);
  }
  formattingDate(posts) {
    posts.forEach(
      post => {
        post['created_utc'] = new Date(post['created_utc'] * 1000)
      });
  }
}
