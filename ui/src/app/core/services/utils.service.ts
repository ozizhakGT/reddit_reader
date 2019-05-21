import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  posts = new Subject<any[]>();
  constructor(private notification: MatSnackBar) { }

  messageNotification(message, action, messagetype) {
    this.notification.open(message, action, {
      duration: 3500,
      panelClass: ['notification', messagetype],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  setPosts(data) {
    let posts = [];
    const propArray = ['author', 'thumbnail', 'ups', 'created_utc', 'url', 'title'];
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
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    posts.forEach(
      post => {
        let date    = new Date(post['created_utc'] * 1000);
        let year    = date.getFullYear();
        let month   = months[date.getMonth()];
        let day     = date.getDate();
        let hours   = date.getHours();
        let minutes = (date.getMinutes() < 9) ? '0' + date.getMinutes() : date.getMinutes();
        post['created_utc'] = `${day}/${month}/${year} - ${hours}:${minutes}`;

      });
  }
}
